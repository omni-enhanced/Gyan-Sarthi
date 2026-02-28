from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.core.database import get_db
from app.middleware.role_middleware import role_required
from app.models.question import Question
import uuid

router = APIRouter(prefix="/questions", tags=["Questions"])


@router.post("/")
def create_question(data: dict,
                    db: Session = Depends(get_db),
                    user=Depends(role_required("admin"))):

    question = Question(
        question_id=str(uuid.uuid4()),
        subject=data["subject"],
        topic=data["topic"],
        difficulty=data["difficulty"],
        question_text=data["question_text"],
        correct_answer=data["correct_answer"],
        concept_tag=data.get("concept_tag"),
        created_by=user["sub"]
    )

    db.add(question)
    db.commit()

    return {"message": "Question created"}


@router.get("/practice")
def practice(subject: str, topic: str, difficulty: str,
             db: Session = Depends(get_db)):

    return db.query(Question).filter(
        Question.subject == subject,
        Question.topic == topic,
        Question.difficulty == difficulty
    ).all()