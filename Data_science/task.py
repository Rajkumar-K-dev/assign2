import streamlit as st
import google.generativeai as genai
genai.configure(api_key="Api-key")
st.title("GenAI Code Reviewer")
st.write("Submit your Python code for AI-powered review using Google Generative AI.")
code_input = st.text_area("Enter Python code:")
def review_code(code):
    try:
        model = genai.GenerativeModel("gemini-pro")
        response = model.generate_content(f"Review the following Python code and provide feedback:\n{code}")
        return response.text
    except Exception as e:
        return f"Error: {e}"

if st.button("Review Code"):
    if code_input.strip():
        st.subheader("GenAI Review Feedback:")
        feedback = review_code(code_input)
        st.write(feedback)
    else:
        st.warning("Please enter some Python code.")
