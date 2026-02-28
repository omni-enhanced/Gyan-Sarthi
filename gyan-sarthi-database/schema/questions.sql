CREATE TABLE questions (
    question_id UUID PRIMARY KEY,
    subject VARCHAR(100),
    topic VARCHAR(100),
    difficulty VARCHAR(20),
    -- easy | medium | hard

    question_text TEXT,
    correct_answer TEXT,

    concept_tag VARCHAR(100),

    created_by UUID REFERENCES users(user_id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);