from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.core.security import get_current_user
from app.models.ai_log import AILog
import uuid

router = APIRouter(prefix="/ai", tags=["AI"])


@router.post("/explain")
def explain(data: dict,
            db: Session = Depends(get_db),
            user=Depends(get_current_user)):

    if data["mode"] == "exam":
        raise HTTPException(status_code=403, detail="AI not allowed in exam mode")

    explanation = "AI explanation placeholder"

    log = AILog(
        ai_log_id=str(uuid.uuid4()),
        user_id=user["sub"],
        question_id=data["question_id"],
        ai_source="internal",
        prompt=data["prompt"],
        response=explanation,
        mode="practice"
    )

    db.add(log)
    db.commit()

    return {"explanation": explanation}


@router.get("/usage")
def usage(db: Session = Depends(get_db),
          user=Depends(get_current_user)):

    count = db.query(AILog).filter(
        AILog.user_id == user["sub"]
    ).count()

    return {"ai_usage_count": count}