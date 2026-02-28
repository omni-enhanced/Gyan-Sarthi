from sqlalchemy import Column, String, Float, Boolean
from app.core.database import Base
import uuid

class User(Base):
    __tablename__ = "users"

    user_id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String)
    email = Column(String, unique=True)
    password_hash = Column(String)
    role = Column(String)
    institution_name = Column(String)
    cognitive_profile = Column(String, default="{}")
    readiness_score = Column(Float, default=0.0)
    ai_preference = Column(String, default="internal")
    is_active = Column(Boolean, default=True)