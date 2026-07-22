import pandas as pd


def analyze_performance(file_path):

    df = pd.read_excel(file_path)

    total_subjects = len(df)

    average = df["Score"].mean()


    strong_subjects = df[df["Score"] >= 70]

    weak_subjects = df[df["Score"] < 50]


    result = {

        "average_score": round(average,2),

        "total_subjects": total_subjects,

        "strong_subjects": strong_subjects.to_dict(
            orient="records"
        ),

        "weak_subjects": weak_subjects.to_dict(
            orient="records"
        ),

    }


    return result