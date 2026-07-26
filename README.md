# ❤️ Heart Disease Prediction Using Machine Learning

## 📌 Overview

This project predicts the presence of cardiovascular disease using machine learning algorithms on the **Cardiovascular Disease Dataset (cardio_train.csv)**. It includes data preprocessing, exploratory data analysis (EDA), visualization, model training, performance comparison, and hyperparameter tuning to identify the most accurate prediction model.

---

## 🚀 Features

- Data preprocessing and cleaning
- Missing value analysis
- Feature scaling using StandardScaler
- Categorical variable encoding
- Exploratory Data Analysis (EDA)
- Histogram and Boxplot visualizations
- Correlation Matrix
- Multiple Machine Learning models
- Hyperparameter tuning using RandomizedSearchCV
- Performance evaluation using:
  - Accuracy
  - Precision
  - Recall
  - F1 Score

---

## 📂 Dataset

**Dataset:** `cardio_train.csv`

The dataset contains medical attributes such as:

- Age
- Gender
- Height
- Weight
- Systolic Blood Pressure
- Diastolic Blood Pressure
- Cholesterol
- Glucose
- Smoking Habit
- Alcohol Consumption
- Physical Activity
- Target Variable (Cardiovascular Disease)

---

## 🛠 Technologies Used

- Python
- Pandas
- NumPy
- Matplotlib
- Seaborn
- Scikit-learn

---

## 📊 Machine Learning Models

The following classification algorithms are implemented:

- Support Vector Machine (SVM)
- K-Nearest Neighbors (KNN)
- Decision Tree
- Logistic Regression
- Random Forest

---

## ⚙️ Data Preprocessing

The preprocessing pipeline includes:

- Checking missing values
- Inspecting data types
- Feature normalization using StandardScaler
- Gender encoding using one-hot encoding
- Feature selection for model training

---

## 📈 Exploratory Data Analysis

Visualizations include:

- Histograms
- Boxplots
- Correlation Heatmap
- Target Variable Distribution
- Feature vs Target Relationship

---

## 🔍 Hyperparameter Tuning

Random Forest is optimized using **RandomizedSearchCV**.

### Tuned Parameters

- Number of Trees (`n_estimators`)
- Maximum Tree Depth (`max_depth`)
- Minimum Samples Split (`min_samples_split`)
- Minimum Samples Leaf (`min_samples_leaf`)
- Bootstrap Sampling

---

## 📊 Model Performance

| Model | Accuracy | Precision | Recall | F1 Score |
|--------|----------|-----------|--------|----------|
| Support Vector Machine | 49.48% | 49.48% | 41.54% | 45.17% |
| K-Nearest Neighbors | 50.41% | 50.50% | 49.99% | 50.24% |
| Decision Tree | 63.09% | 62.99% | 63.79% | 63.39% |
| Logistic Regression | 63.46% | 62.01% | 69.79% | 65.67% |
| Random Forest | 72.51% | 73.75% | 70.04% | 71.85% |

### Optimized Random Forest

| Metric | Score |
|--------|-------|
| Accuracy | **73.87%** |
| Precision | **76.64%** |
| Recall | **68.81%** |
| F1 Score | **72.51%** |

---

## 📁 Project Structure

```
Heart-Disease-Prediction/
│
├── cardio_train.csv
├── heart_disease_prediction.py
├── README.md
└── requirements.txt
```

---

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/Heart-Disease-Prediction.git
```

Move into the project folder

```bash
cd Heart-Disease-Prediction
```

Install dependencies

```bash
pip install -r requirements.txt
```

Run the project

```bash
python heart_disease_prediction.py
```

---

## 📦 Requirements

```
pandas
numpy
matplotlib
seaborn
scikit-learn
```

Or install them using

```bash
pip install pandas numpy matplotlib seaborn scikit-learn
```

---

## 📌 Future Improvements

- Handle outliers before model training
- Apply feature selection techniques
- Use XGBoost and LightGBM
- Perform cross-validation
- Build a Flask or Streamlit web application
- Deploy the model to the cloud

---

## 👨‍💻 Author

**P. Venkata Vinayak**

B.Tech Computer Science and Engineering

Amrita Vishwa Vidyapeetham

---

## 📄 License

This project is intended for educational and research purposes.
