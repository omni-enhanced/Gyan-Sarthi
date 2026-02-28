from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import hash_password, verify_password, create_access_token, get_current_user
from app.models.user import User
import uuid

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register")
def register(data: dict, db: Session = Depends(get_db)):

    if db.query(User).filter(User.email == data["email"]).first():
        raise HTTPException(status_code=400, detail="Email already exists")

    new_user = User(
        user_id=str(uuid.uuid4()),
        name=data["name"],
        email=data["email"],
        password_hash=hash_password(data["password"]),
        role="student",
        institution_name=data.get("institution_name"),
        cognitive_profile="{}",
        readiness_score=0,
        ai_preference="internal"
    )

    db.add(new_user)
    db.commit()

    return {"message": "User registered successfully"}


@router.post("/login")
def login(data: dict, db: Session = Depends(get_db)):

    user = db.query(User).filter(User.email == data["email"]).first()

    if not user or not verify_password(data["password"], user.password_hash):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token({
        "sub": user.user_id,
        "role": user.role
    })

    return {"access_token": token}


@router.get("/profile")
def profile(user=Depends(get_current_user)):
    return user