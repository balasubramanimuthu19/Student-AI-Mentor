from fastapi import FastAPI
import pandas as pd

from analyzer import analyze_performance
from planner import generate_study_plan
from groq_config import ask_ai


app = FastAPI()


@app.get("/")
def home():
    return {
        "project": "Student AI Mentor",
        "status": "Running"
    }


@app.get("/read-excel")
def read_excel():

    df = pd.read_excel(
        "data/student_scores.xlsx"
    )

    return df.to_dict(
        orient="records"
    )


@app.get("/analyze")
def analyze():

    result = analyze_performance(
        "data/student_scores.xlsx"
    )

    return result


@app.get("/study-plan")
def study_plan():

    analysis = analyze_performance(
        "data/student_scores.xlsx"
    )

    result = generate_study_plan(
        analysis["weak_subjects"],
        exam_days=10,
        available_hours=3
    )

    return result


@app.get("/chat")
def chat(question: str):

    answer = ask_ai(question)

    return {
        "question": question,
        "answer": answer
    }