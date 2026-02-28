CREATE TABLE users (
    user_id UUID PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150) UNIQUE,
    password_hash TEXT,
    role VARCHAR(20), 
    -- student | admin | teacher | super_admin

    institution_name VARCHAR(150),

    cognitive_profile JSONB,
    readiness_score FLOAT DEFAULT 0,

    ai_preference VARCHAR(50),
    -- internal | personal_api | external_only

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);