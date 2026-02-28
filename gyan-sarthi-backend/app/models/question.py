from sqlalchemy import Column, String, Text
from app.core.database import Base
import uuid

class Question(Base):
    __tablename__ = "questions"

    question_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    subject = Column(String)
    topic = Column(String)
    difficulty = Column(String)
    question_text = Column(Text)
    correct_answer = Column(Text)
    concept_tag = Column(String)
    created_by = Column(String)