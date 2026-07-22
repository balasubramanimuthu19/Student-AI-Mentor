from groq_config import ask_ai


def generate_study_plan(weak_subjects, exam_days, available_hours):

    if len(weak_subjects) == 0:
        return {
            "message": "Great! No weak subjects found.",
            "plan": []
        }

    subjects = ", ".join(
        [subject["Subject"] for subject in weak_subjects]
    )

    prompt = f"""
You are an AI Student Mentor.

Create a personalized study plan.

Weak Subjects:
{subjects}

Days Remaining:
{exam_days}

Available Study Hours Per Day:
{available_hours}

Return the answer in simple text with:
1. Daily timetable
2. Topics to study
3. Revision schedule
4. Practice suggestions
5. Motivation
"""

    ai_plan = ask_ai(prompt)

    return {
        "exam_days_remaining": exam_days,
        "daily_available_hours": available_hours,
        "weak_subjects": subjects,
        "ai_study_plan": ai_plan
    }