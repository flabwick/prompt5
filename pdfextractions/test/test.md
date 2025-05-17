**Econometrics Chapter 1 Explained Using the Feynman Technique**

---

**What Is Econometrics?**

Econometrics is a way to use math and statistics to answer real-world questions in economics. People use it to:

* Test if economic theories are true.
* Predict things like future sales or GDP.
* Fit economic models to real data.
* Give numerical advice to businesses and governments.

So, econometrics is about taking ideas from economics and using numbers and data to study them. It’s used in finance, labor, policy, and even in other fields like political science.

---

**Four Key Questions in This Chapter**

1. **Does smaller class size help elementary school kids learn better?**

   * The idea is that fewer students per teacher means more attention and better learning.
   * But we need real data to prove that. Maybe small classes are just in richer areas.
   * So, we look at 420 school districts in California in 1999. We use a method called *multiple regression* to try and separate class size effects from other things like income.

2. **Is there racial discrimination in who gets home loans?**

   * In theory, race shouldn’t affect whether someone gets a mortgage.
   * But in early 1990s Boston data, 28% of Black applicants were denied, compared to 9% of White applicants.
   * To check if race is really the reason, we use econometrics to compare people who are the same in every way *except* race.

3. **Does more spending on healthcare make people healthier?**

   * Logically, spending more should improve health.
   * But by how much? Economists look at how much mortality (deaths) go down when spending goes up.
   * This is tricky, because countries differ in many ways, some of which we can’t observe. We use data and methods to try and account for this.

4. **How much will the U.S. economy grow next year?**

   * This is a prediction question, not a causal one.
   * We use past GDP and the *term spread* (difference between long and short interest rates) to forecast future growth.

---

**Causality and Experiments**

When we want to say one thing *causes* another (like fertilizer causing more tomatoes), the best way is with a **randomized controlled experiment**.

* You split into two groups: one gets the treatment (e.g., fertilizer), one doesn’t.
* Assigning who gets what *randomly* means the only difference should be the treatment.
* The difference in outcomes tells you the causal effect.

For the first three questions, we can imagine doing this. For example, randomly assign students to small or large classes.

But often, experiments are too hard, expensive, or unethical. So we use observational data (data collected without controlling who gets what) and try to mimic what an experiment would tell us.

---

**Prediction vs Causality**

* Causal questions ask: "If I change X, what happens to Y?"
* Prediction just wants to guess what Y will be, based on X.

You don’t need causality to make a good prediction. For example, if you see umbrellas, you can guess it’s raining—even though umbrellas don’t *cause* rain.

Forecasting GDP growth is a prediction problem.

---

**Types of Data**

Econometric data come in three main types:

1. **Cross-Sectional Data**

   * Data on many entities (people, firms, etc.) at one time.
   * Example: [Test scores in 420 California school districts in 1999](table_1-1.png).

2. **Time Series Data**

   * Data on one entity over many time periods.
   * Example: [Quarterly U.S. GDP growth from 1960 to 2017](table_1-2.png).

3. **Panel Data (Longitudinal Data)**

   * Data on many entities, each over multiple time periods.
   * Example: [Cigarette sales and prices in 48 U.S. states from 1985 to 1995](table_1-3.png).

---

**Why This Matters**

* Decisions in economics and business rely on understanding how one thing affects another.
* Randomized experiments are ideal but rare.
* Econometrics helps us learn from real-world, imperfect data.
* The key tool we’ll use is *multiple regression*—a way to find the effect of one variable while holding others constant.

---

**Key Terms**

* **Randomized Controlled Experiment**: An experiment where people/things are randomly assigned to treatment or control groups.
* **Causal Effect**: The result of a treatment or action, measured in an ideal experiment.
* **Prediction / Forecast**: Estimating an outcome based on known information.
* **Experimental Data**: Data from planned experiments.
* **Observational Data**: Data collected from the real world, not controlled.
* **Cross-Sectional Data**: Many subjects at one point in time.
* **Time Series Data**: One subject over many time periods.
* **Panel Data**: Many subjects over many time periods.
