from sqlalchemy import Column, String, Text
from app.core.database import Base
import uuid

class AILog(Base):
    __tablename__ = "ai_logs"

    ai_log_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    user_id = Column(String)
    question_id = Column(String)
    ai_source = Column(String)
    prompt = Column(Text)
    response = Column(Text)
    mode = Column(String)