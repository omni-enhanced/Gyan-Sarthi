from sqlalchemy import Column, String, Boolean, Integer
from app.core.database import Base
import uuid

class Attempt(Base):
    __tablename__ = "attempts"

    attempt_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String)
    question_id = Column(String)
    selected_answer = Column(String)
    is_correct = Column(Boolean)
    mode = Column(String)
    time_taken_seconds = Column(Integer)
    used_ai = Column(Boolean, default=False)