# Week 1
COURSE STRUCTURE & CURRICULUM OVERVIEW – EE2007 / ECONOMETRICS INTRO

⸻

Unit: Week 1 – Course Introduction & Logistics

What to learn
	•	Definition and scope of econometrics
	•	Components: economics + stats + math + coding
	•	Course structure: combined lecture + workshop, plus separate computer labs
	•	Python environment setup for data analysis
	•	Intro to Jupyter notebooks and Google Colab
	•	Assignment formats and logistics

Not in scope
	•	Deep maths or coding – only introductory material this week
	•	Application of econometrics yet

Methods/tools used
	•	Google Colab (recommended), Anaconda (optional)
	•	Python, Jupyter Notebooks
	•	GitHub site for slides/workshops
	•	Wattle for announcements, quizzes, submissions

Exam-style questions
	•	None yet; quizzes begin week 3
	•	Participation begins week 2

Equations to know
	•	None required this week

Diagrams to master
	•	None required this week

⸻

Unit: Week 1 (cont’d) – Probability Refresher I: Foundations

What to learn
	•	Definitions: outcome, event, sample space
	•	Random variables: mapping outcomes to numbers
	•	Example: coin toss, die roll, kangaroo sightings
	•	Discrete vs continuous variables
	•	Probability distribution (table + function form)
	•	Cumulative distribution function (CDF)

Not in scope
	•	Calculus-based continuous distribution theory
	•	Joint/multivariate probability yet

Methods/tools used
	•	Intuition, simple enumerated examples
	•	Conceptual explanations
	•	Histogram of discrete probability

Exam-style questions
	•	Define and identify outcomes, events, sample space
	•	Construct and interpret a simple probability table
	•	Use CDF to answer “≤” probability questions

Equations to know
	•	P(Y = y) for all discrete y
	•	Cumulative distribution: F(y) = P(Y \leq y)

Diagrams to master
	•	Histogram of probability mass function (PMF)
	•	Stepwise CDF graph

⸻

Unit: Week 1 (cont’d) – Probability Refresher II: Expectation & Moments

What to learn
	•	Expected value E[Y]: definition and intuition
	•	Difference between population mean and sample average
	•	Properties of expectation (linearity, constants, etc.)
	•	Higher moments:
	•	1st moment = mean
	•	2nd = variance (sort of)
	•	3rd = skewness
	•	4th = kurtosis

Not in scope
	•	Proving all properties formally
	•	Continuous distributions with integrals

Methods/tools used
	•	Discrete formulas using summation
	•	Intuition building through kangaroo weight example

Exam-style questions
	•	Calculate mean/variance from probability table
	•	State and apply properties of expectation
	•	Match moments to descriptions (e.g., which moment = skewness?)

Equations to know
	•	E[Y] = \sum y_i P(y_i)
	•	E[c] = c, E[Y + c] = E[Y] + c, E[cY] = cE[Y]
	•	E[Y^r] = r-th moment
	•	\text{Var}(Y) = E[(Y - \mu)^2] = \sum (y_i - \mu)^2 P(y_i)

Diagrams to master
	•	PMF examples with discrete data

⸻

Unit: Week 1 (cont’d) – Variance & Distribution Properties

What to learn
	•	Variance: interpretation, calculation
	•	Properties of variance:
	•	Variance of constants
	•	Scaling by a constant (multiplicative)
	•	Variance of sum/difference
	•	Covariance (brief mention; covered next week)

Not in scope
	•	Covariance derivation or correlation coefficients

Methods/tools used
	•	Worked examples using fake kangaroo weights
	•	Variance sensitivity to sample size

Exam-style questions
	•	Compute variance from full discrete PMF
	•	State variance rules, e.g., \text{Var}(cY) = c^2 \text{Var}(Y)
	•	Explain why \text{Var}(Y+c) = \text{Var}(Y)

Equations to know
	•	\text{Var}(Y) = E[Y^2] - (E[Y])^2
	•	\text{Var}(aY) = a^2 \text{Var}(Y)
	•	\text{Var}(X \pm Y) = \text{Var}(X) + \text{Var}(Y) \pm 2\text{Cov}(X, Y)

Diagrams to master
	•	No new required; histogram intuition aids understanding

⸻

Unit: Week 1 (cont’d) – Population vs Sample

What to learn
	•	Definitions: population, sample, parameters vs statistics
	•	Population as conceptually unobservable
	•	Sample mean as an estimator
	•	Sample vs population variance
	•	Concept of IID samples
	•	Statistical properties of sample average:
	•	It’s a random variable
	•	Has its own distribution, mean, variance

Not in scope
	•	Derivations using calculus or measure theory

Methods/tools used
	•	Kangaroo weight example across 3 samples
	•	Emphasis on statistical estimation

Exam-style questions
	•	Define sample vs population
	•	Explain why sample mean is unbiased
	•	Show how sample size affects precision of estimate

Equations to know
	•	Sample mean: \bar{Y} = \frac{1}{n} \sum_{i=1}^n Y_i
	•	E[\bar{Y}] = \mu_Y
	•	\text{Var}(\bar{Y}) = \frac{\sigma^2_Y}{n}
	•	Sample variance (unbiased version next week)

Diagrams to master
	•	Histogram illustrating sampling distribution of \bar{Y}

⸻

Unit: Week 1 (cont’d) – Technical Setup & Assignment Structure

What to learn
	•	Setting up Python using Anaconda or Google Colab
	•	Use of GitHub for weekly materials (slides, workshop, datasets)
	•	Assignment workflow:
	•	Python + Jupyter
	•	Submission via Wattle/Turnitin
	•	Quiz structure: 4 quizzes × 5%
	•	Assignment structure: 2 × 7.5%
	•	Participation: 5% assessed in labs

Not in scope
	•	Manual statistical computation by hand
	•	Use of software other than Python/Jupyter

Methods/tools used
	•	Setup guides provided on course site
	•	Tutors provide support for Python setup
	•	Emphasis on self-reliance in setup

Exam-style questions
	•	Quizzes: MCQs starting week 3
	•	Final exam = written, pen-paper
	•	Sample/practice exams provided mid-semester

Equations to know
	•	None tested yet; later exams likely to test means/variances

Diagrams to master
	•	None explicitly tested, but histogram visualisation in Jupyter expected

⸻

Summary of Core Takeaways for Tutors
	•	Focus early weeks on probabilistic intuition and basic stat properties
	•	Emphasise difference between sample and population
	•	Sample average = primary tool for estimation
	•	Prioritise getting students comfortable with Python + Jupyter
	•	Most maths limited to summation-based probability/statistics (no calculus yet)
	•	All concepts contextualised using economic/data analysis (e.g. kangaroo weights)
	•	Students expected to understand, not memorise; apply intuition and estimate distributions
	•	Visual understanding through histograms; build toward normality intuition
	•	Assignments reinforce lab learning, not trick questions
	•	Quizzes test concepts introduced in lecture/workshops

This structure should guide week-by-week teaching priorities and expectation-setting. ￼
# Week 2
Central Limit Theorem, Sampling Distributions, and Hypothesis Testing

Topic Title: Course Logistics and Expectations
What to learn:
	•	Consultation schedule: Thursdays (Weeks 2–5), Fridays (Weeks 6–12)
	•	Wattle announcements for updates
	•	FAQ policy: if lab missed, attend another or catch up via notebook and/or consultation
	•	Quiz info:
	•	Week 3, Wattle-based
	•	50 MCQs, 60 min (available Wed 9 a.m. to Thurs 3 p.m.)
	•	Material covered: Weeks 1 & 2 lectures, workshops, labs
	•	Cannot be done after 2:45 p.m. Thursday (time expires at 3:00 p.m.)
Not in scope:
	•	Week 3 material not assessed in the quiz

Methods/tools used:
	•	Python required (used in computer labs)
	•	Jupiter notebooks
	•	Data simulation (used to illustrate CLT)

Exam-style questions:
	•	Multiple choice quiz on early content (Week 3)
	•	Likely similar: conceptual and applied MCQs
	•	Expect reasoning around sample attendance policies

Equations to know:
N/A

Diagrams to master:
N/A

⸻

Topic Title: Sample Average and Its Properties
What to learn:
	•	Sample average \bar{Y} is a random variable
	•	Mean of \bar{Y} = \mu, same as individual observations
	•	Variance of \bar{Y} = \sigma^2/n, smaller than that of individuals
	•	Interpretation: averaging reduces variance
Not in scope:
	•	Other estimators yet

Methods/tools used:
	•	Algebraic derivation
	•	Basic probability knowledge

Exam-style questions:
	•	Explain or compute mean/variance of a sample average
	•	Compare properties of mean vs. sample average
	•	Multiple choice on these concepts

Equations to know:
	•	E(\bar{Y}) = \mu
	•	\text{Var}(\bar{Y}) = \frac{\sigma^2}{n}

Diagrams to master:
	•	Conceptual diagram showing individual distribution vs. sample mean distribution

⸻

Topic Title: Central Limit Theorem (CLT)
What to learn:
	•	CLT: Regardless of the population distribution, the sample average tends to a normal distribution as n increases
	•	Exact normality only if original distribution is normal
	•	Approximation improves as sample size increases
	•	Illustrated with simulations (e.g., exponential distribution, sample sizes of 5, 30, 100)
Not in scope:
	•	Derivations of CLT
	•	Proof of normal convergence

Methods/tools used:
	•	Simulation-based visualisation
	•	Histogram analysis
	•	Conceptual examples

Exam-style questions:
	•	Interpret simulation output
	•	Conceptual MCQs: When does CLT apply? What does it mean?
	•	Qualitative comparison of distributions

Equations to know:
	•	CLT form: \bar{Y} \approx N(\mu, \sigma^2/n)
	•	Standardised form: \frac{\bar{Y} - \mu}{\sigma/\sqrt{n}} \sim N(0,1)

Diagrams to master:
	•	Histograms from simulation
	•	Show transition from skewed population to symmetric sampling distribution
	•	Normal curves comparing approximation quality for different n

⸻

Topic Title: Hypothesis Testing
What to learn:
	•	Null and alternative hypothesis (e.g., mean = 8:10)
	•	Interpretation of sample average under CLT
	•	Decision rule: Reject null if sample mean lies in tail (typically 5% total)
	•	Rejection region defined as values beyond ±1.96 standard errors
	•	Understanding probability of rare events under the null
Not in scope:
	•	p-value calculation
	•	Advanced test types

Methods/tools used:
	•	Use of normal distribution
	•	Application of standard error
	•	Critical region interpretation

Exam-style questions:
	•	Determine if null should be rejected
	•	Set up hypothesis test
	•	Interpret sample average in context of distribution

Equations to know:
	•	Test statistic: \frac{\bar{Y} - \mu_0}{\sigma/\sqrt{n}}
	•	95% rejection region: \mu_0 \pm 1.96 \cdot \text{SE}

Diagrams to master:
	•	Normal distribution showing mean, 95% interval, rejection region
	•	Visually locating sample mean within or outside rejection region

⸻

Topic Title: Confidence Intervals
What to learn:
	•	Confidence interval = range of plausible values for population mean
	•	Centered at sample mean ±1.96 * standard error
	•	Replacing unknown population std dev with sample std dev
	•	Unbiased vs biased variance estimates (divide by n vs. n–1)
Not in scope:
	•	Other confidence levels (e.g., 99%, 90%)

Methods/tools used:
	•	Confidence interval formula
	•	Sample standard deviation
	•	Sample mean

Exam-style questions:
	•	Construct CI using given sample mean and standard deviation
	•	Interpret if a population value lies within the interval
	•	Explain difference between estimator and estimate

Equations to know:
	•	CI = \bar{Y} \pm 1.96 \cdot \frac{s}{\sqrt{n}}
	•	s^2 = \frac{1}{n} \sum (Y_i - \bar{Y})^2 or with n–1

Diagrams to master:
	•	Confidence interval on number line
	•	Normal curve with confidence bounds

⸻

Topic Title: Properties of Estimators
What to learn:
	•	Estimator vs. estimate
	•	Bias: E[\hat{\theta}] = \theta \Rightarrow unbiased
	•	Minimum variance among unbiased estimators = efficient
	•	Sample average is BLUE: Best Linear Unbiased Estimator
	•	Variance of sample average \text{Var}(\bar{Y}) = \sigma^2/n
Not in scope:
	•	Non-linear estimators
	•	Formal proofs of BLUE

Methods/tools used:
	•	Expected value and variance algebra
	•	Linear combinations
	•	Gauss-Markov theorem logic

Exam-style questions:
	•	Determine if estimator is biased/unbiased
	•	Compare variances
	•	Prove sample average is BLUE (qualitative justification)

Equations to know:
	•	\hat{\theta} is BLUE ⇔ unbiased, linear, min variance
	•	\text{Var}(\bar{Y}) = \sigma^2/n
	•	Alternative estimators (e.g., weighted averages) have higher variance

Diagrams to master:
	•	Comparison: weighted average vs. sample average variance
	•	Histogram of estimator distribution centered at true value

⸻

Topic Title: Application Example: Ukrainian Student Scores
What to learn:
	•	Applying CI and hypothesis testing in context
	•	Compare two sample means (before vs after intervention)
	•	Difference of means hypothesis test
Not in scope:
	•	ANOVA or regression

Methods/tools used:
	•	Two-sample standard error formula
	•	Confidence interval for difference in means
	•	Interpretation of overlapping CIs

Exam-style questions:
	•	Calculate and interpret CI for single mean
	•	Construct CI for difference in means
	•	Assess intervention effectiveness

Equations to know:
	•	Difference in means CI:
(\bar{Y}_1 - \bar{Y}_0) \pm 1.96 \cdot \sqrt{\frac{s_1^2}{n_1} + \frac{s_0^2}{n_0}}
	•	Hypothesis test: H_0: \mu_1 = \mu_0

Diagrams to master:
	•	Side-by-side confidence intervals
	•	Interpretation of overlapping/non-overlapping intervals

⸻

Topic Title: Summary of Statistical Inference
What to learn:
	•	Purpose: use random sample to infer population parameters
	•	Estimators = functions of sample data
	•	Good estimator: unbiased, low variance
	•	Inference focused mainly on means
Not in scope:
	•	Maximum likelihood
	•	Bayesian inference

Methods/tools used:
	•	Estimation
	•	CLT-based inference
	•	Sampling logic

Exam-style questions:
	•	Define statistical inference
	•	Judge quality of estimator
	•	Explain rationale for inference from sample to population

Equations to know:
	•	Same as previous sections
	•	CLT + standard error = inference foundation

Diagrams to master:
	•	Population vs. sample vs. sampling distribution
	•	Graphical distinction between parameter, estimator, estimate

# Week 3
Topic: Course Introduction and Quiz Logistics

What to learn:
	•	Quiz is reflective of material from the first two weeks
	•	Quiz structure: multiple choice (4 options)
	•	Feedback system: shows if answer is correct, not the correct answer
	•	Objective: Learning, not answer-giving
	•	Deadline policies and timing strategy

Not in scope:
	•	Direct answer provision

Methods/tools used:
	•	Self-review
	•	Peer discussion
	•	Tutor support for problem-solving

Exam-style questions:
	•	Multiple choice conceptual understanding

Equations to know:
	•	None yet

Diagrams to master:
	•	None

⸻

Topic: Bivariate and Multivariate Statistics

What to learn:
	•	Univariate vs bivariate vs multivariate data
	•	Concept and interpretation of covariance and correlation
	•	Joint distribution analysis using scatter plots
	•	Marginal vs joint distributions
	•	Example: Student-teacher ratio vs test scores

Not in scope:
	•	Multivariate regression estimation yet

Methods/tools used:
	•	Scatter plot interpretation
	•	Descriptive statistics

Exam-style questions:
	•	Interpretation of scatter plots
	•	Explanation of covariance/correlation with examples
	•	Identifying bivariate relationships

Equations to know:
	•	Cov(X,Y) = E[(X - E[X])(Y - E[Y])]
	•	Sample covariance: 1/(n-1) * sum((Xi - Xbar)(Yi - Ybar))
	•	Corr(X,Y) = Cov(X,Y)/(SD(X) * SD(Y))

Diagrams to master:
	•	Scatter plot: label axes, dots represent aggregated data (e.g., school districts)
	•	Interpret slope, strength, and direction of relationships

⸻

Topic: Covariance and Correlation

What to learn:
	•	Definitions and sample vs population formulas
	•	Interpretation of sign and magnitude
	•	When correlation = 0 still allows for nonlinear association
	•	Correlation is unit-free; covariance retains units

Not in scope:
	•	Causal interpretations

Methods/tools used:
	•	Mathematical derivation
	•	Comparison examples: height/weight, test scores, class size

Exam-style questions:
	•	Compute sample covariance/correlation
	•	Interpret signs and values
	•	Explain why correlation doesn’t imply no relationship

Equations to know:
	•	Cov(X,Y), Corr(X,Y) formulas (see above)

Diagrams to master:
	•	4 scatter plots showing linear/zero/nonlinear correlation

⸻

Topic: Conditional Expectation and Regression

What to learn:
	•	Regression setup: Y = f(X, U)
	•	Functional simplifications:
	•	Additive separability: f(X, U) = g(X) + h(U)
	•	Linearity: g(X) = β_0 + β_1 X
	•	Identity mapping for U: h(U) = U
	•	Population Regression Function (PRF): E[Y|X] = g(X)
	•	Conditional Mean Independence (CMI): E[U|X] = 0

Not in scope:
	•	Estimating β coefficients (OLS covered next week)
	•	Advanced regression diagnostics

Methods/tools used:
	•	Conceptual derivation
	•	Real-life analogies for expectation

Exam-style questions:
	•	State assumptions for PRF validity
	•	Interpret model components (β_0, β_1, U)
	•	Relate CMI to real-world examples

Equations to know:
	•	E[Y|X] = β_0 + β_1 X
	•	Y = β_0 + β_1 X + U
	•	E[U|X] = 0

Diagrams to master:
	•	Regression line in scatter plot
	•	Vertical distance from point to line = U

⸻

Topic: Interpreting the Regression Function

What to learn:
	•	Regression predicts E[Y|X], not actual Y
	•	Variation in actual Y around PRF is captured by U
	•	Real-world meaning of U (e.g. luck, intelligence)

Not in scope:
	•	Exact prediction models

Methods/tools used:
	•	Numerical examples
	•	Simulated test scores vs expected value

Exam-style questions:
	•	Given β values, calculate E[Y|X] for given X
	•	Discuss interpretation of U in context

Equations to know:
	•	Y = β_0 + β_1 X + U
	•	E[Y|X] = β_0 + β_1 X

Diagrams to master:
	•	Dots around regression line with deviation = U

⸻

Topic: Conditional Mean Independence in Context

What to learn:
	•	Definition of CMI: E[Y|X] = E[Y]
	•	When CMI fails: privileged backgrounds, omitted variables
	•	Application examples: temperature/season, education/intelligence
	•	CMI and bias in regression

Not in scope:
	•	Advanced causality models (e.g., instrumental variables)

Methods/tools used:
	•	Conceptual analogy
	•	Logical reasoning through examples

Exam-style questions:
	•	Identify if CMI holds in scenario
	•	Explain implication of CMI violation

Equations to know:
	•	E[Y|X] = E[Y] (if CMI holds)
	•	Implication: Cov(X,U) = 0

Diagrams to master:
	•	No new diagrams, emphasis on logical flow

⸻

Topic: Nonlinear Relationships and Zero Correlation

What to learn:
	•	Constructing zero-correlation variables with relationship (e.g., Y = X^2 + Z)
	•	Independence vs correlation
	•	Zero covariance doesn’t mean no relationship

Not in scope:
	•	Nonlinear regression estimation

Methods/tools used:
	•	Constructed examples
	•	Algebraic derivation

Exam-style questions:
	•	Show zero correlation but functional dependence
	•	Evaluate E[Y|X] ≠ E[Y] in constructed cases

Equations to know:
	•	Cov(X,Y) = E[XY] - E[X]E[Y]

Diagrams to master:
	•	U-shaped scatter plots with linear correlation = 0

⸻

Topic: Minimisation and Sample Mean

What to learn:
	•	Derivation of sample mean as minimiser of squared deviation
	•	Use of calculus: derivative, set to zero, solve

Not in scope:
	•	Estimation theory

Methods/tools used:
	•	Calculus-based optimisation

Exam-style questions:
	•	Derive formula for sample mean via least squares

Equations to know:
	•	μ̂ = argmin_m ∑(Y_i - m)^2
	•	First-order condition: ∑(Y_i - μ̂) = 0 ⇒ μ̂ = ∑Y_i / n

Diagrams to master:
	•	Loss function curve (squared error vs m)

⸻


# Week 4
Linear Regression and OLS Estimation – Curriculum Breakdown

⸻

Topic: Linear Regression Foundations

What to learn:
	•	Understanding the population linear regression model:
Y_i = \beta_0 + \beta_1 X_i + u_i
	•	Definitions:
	•	Y: dependent variable
	•	X: independent variable
	•	\beta_0, \beta_1: population intercept and slope
	•	u_i: error term (captures all omitted factors)
	•	Concept of PRF (Population Regression Function)
	•	Interpretation of slope (\beta_1) as expected or causal effect
	•	Interpretation of intercept (\beta_0), with caution about out-of-sample predictions
	•	Common sense bounds in interpreting model outputs (e.g., not predicting for class size = 0)

Not in scope:
	•	Causal inference (mentioned as future topic)
	•	Advanced econometrics or multiple regression

Methods/tools used:
	•	Verbal and graphical explanation of model components
	•	Conceptual thinking for error term and model structure

Exam-style questions:
	•	Define components of the linear regression model
	•	Explain role of error term
	•	Interpret the slope and intercept in context
	•	Discuss limitations of extrapolation

Equations to know:
	•	Y_i = \beta_0 + \beta_1 X_i + u_i

Diagrams to master:
	•	Scatter plot with regression line
	•	Label: observed points, estimated line, PRF
	•	Identify slope and intercept
	•	Show error/residual distances

⸻

Topic: Estimation via OLS

What to learn:
	•	OLS objective: minimise the sum of squared residuals
\min_{b_0, b_1} \sum (Y_i - b_0 - b_1 X_i)^2
	•	Reason for using squared differences: avoids cancellation, allows differentiation
	•	Derivation of OLS estimators through first-order conditions
	•	Visual explanation via “marble rolling down valley” analogy
	•	Concept of best linear unbiased estimator (BLUE)

Not in scope:
	•	Least absolute deviations (briefly mentioned as non-differentiable)
	•	Maximum likelihood estimation

Methods/tools used:
	•	Partial differentiation w.r.t. b_0, b_1
	•	Algebraic manipulation of summation terms
	•	Use of sample means

Exam-style questions:
	•	Derive OLS estimators from minimisation problem
	•	Show OLS minimises squared residuals
	•	Explain reasoning for squaring errors instead of absolute values

Equations to know:
	•	OLS estimators:
\hat{\beta}_1 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2}
\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}

Diagrams to master:
	•	3D valley-shaped loss surface (interpret gradient descent)
	•	Estimated vs population regression function (solid vs dashed lines)
	•	Vertical distances (residuals vs errors)

⸻

Topic: Residuals and Prediction

What to learn:
	•	Definitions:
	•	Predicted value: \hat{Y}_i = \hat{\beta}_0 + \hat{\beta}_1 X_i
	•	Residual: \hat{u}_i = Y_i - \hat{Y}_i
	•	Relationship:
Y_i = \hat{Y}_i + \hat{u}_i
	•	Visual distinction between error and residual
	•	Interpretation of residuals in context

Not in scope:
	•	Autocorrelation or heteroskedasticity analysis

Methods/tools used:
	•	Algebraic manipulation to isolate residuals
	•	Graphical distinction between true error and residual

Exam-style questions:
	•	Differentiate between residual and error
	•	Compute residual for a given observation
	•	Explain how residuals relate to estimation quality

Equations to know:
	•	\hat{u}_i = Y_i - (\hat{\beta}_0 + \hat{\beta}_1 X_i)
	•	Y_i = \hat{Y}_i + \hat{u}_i

Diagrams to master:
	•	Scatterplot showing data point, regression line, residual
	•	Error vs residual comparison using vertical distances

⸻

Topic: Properties of OLS Estimators

What to learn:
	•	Algebraic properties of OLS:
	1.	\sum \hat{u}_i = 0
	2.	\sum \hat{u}_i X_i = 0
	3.	\bar{\hat{Y}} = \bar{Y}
	•	Proofs of these properties using substitution and simplification
	•	Conceptual significance (e.g., residuals average to zero)

Not in scope:
	•	Formal statistical inference (confidence intervals, hypothesis tests) – mentioned as next week

Methods/tools used:
	•	Use of summation rules
	•	Rewriting using sample means
	•	Substitution of estimator formulas into summation identities

Exam-style questions:
	•	Prove that residuals sum to zero
	•	Prove that residuals are uncorrelated with X
	•	Show predicted values average to the mean of Y

Equations to know:
	•	\sum \hat{u}_i = 0
	•	\sum \hat{u}_i X_i = 0
	•	\bar{\hat{Y}} = \bar{Y}

Diagrams to master:
	•	None explicitly, but be prepared to explain results graphically with residual plots

⸻

Topic: Practical Application and Interpretation

What to learn:
	•	Interpretation of regression outputs:
	•	Negative slope = inverse relationship
	•	Intercept as predicted value when X = 0 (with caveats)
	•	Use of estimated regression for prediction
	•	Out-of-sample prediction considerations
	•	Real-world application: e.g., student-teacher ratio vs test scores

Not in scope:
	•	Time series forecasting (mentioned as future topic)
	•	Predictive modeling for policy analysis

Methods/tools used:
	•	Plug-in predictions using regression equation
	•	Common sense checks on results
	•	Sample representativeness

Exam-style questions:
	•	Use estimated coefficients to make predictions
	•	Interpret slope in context
	•	Assess whether prediction is valid based on sample range

Equations to know:
	•	Prediction:
\hat{Y}_i = \hat{\beta}_0 + \hat{\beta}_1 X_i

Diagrams to master:
	•	Regression line with extrapolation shown
	•	Highlight supported vs unsupported ranges of X

⸻

Topic: Mathematical Tools and Summation Rules

What to learn:
	•	Common summation identities:
	•	\sum X_i = n \bar{X}
	•	\sum (X_i - \bar{X})(Y_i - \bar{Y})
	•	\sum (X_i - \bar{X})^2
	•	Derivations using:
	•	Distributive law
	•	Linearity of summation
	•	Sample mean relationships

Not in scope:
	•	Matrix algebra or generalized least squares

Methods/tools used:
	•	Brute force expansion of terms
	•	Substitution and factorisation
	•	Transforming expressions into sample statistics

Exam-style questions:
	•	Simplify summation expressions
	•	Prove algebraic identities used in OLS derivation
	•	Derive slope from scratch using sample sums

Equations to know:
	•	\sum X_i = n \bar{X}
	•	\sum (X_i - \bar{X})(Y_i - \bar{Y}) = \sum X_i Y_i - n \bar{X} \bar{Y}
	•	\sum (X_i - \bar{X})^2 = \sum X_i^2 - n \bar{X}^2

Diagrams to master:
	•	None – entirely symbolic/algebraic work

⸻


# Week 5
OLS Assumptions and Sampling Distributions Curriculum Summary

Topic: OLS Assumptions (Econometrics Week 5)

What to learn:
	•	OLS Assumption 1: Conditional Mean Independence (CMI)
	•	E[Ui | Xi] = E[Ui] = µU, often assumed to be 0
	•	Intuition: knowledge of Xi provides no information about Ui
	•	Relevance to randomized experiments
	•	Implication for unbiasedness of slope estimator
	•	OLS Assumption 2: IID Sampling
	•	Independent and identically distributed observations
	•	Allows for simplifications in expectation and variance derivations
	•	OLS Assumption 3: Finite Fourth Moments
	•	Implies large outliers are rare
	•	Variance and fourth moments of Xi and Yi must exist
	•	Graphical checks: histogram, scatterplot
	•	OLS Assumption 4A: Homoskedasticity
	•	Constant conditional variance: Var[Ui | Xi] = σ^2
	•	Will be relaxed later (assumption 4B)

Not in scope:
	•	Full derivations of intercept estimator distribution
	•	Variance-covariance matrices
	•	Deep dive into violations of each assumption (reserved for later weeks)
	•	Full treatment of heteroskedasticity (covered next week)

Methods/tools used:
	•	Algebraic manipulation of summation expressions
	•	Use of conditional expectation and variance rules
	•	Sample vs population variance distinctions
	•	Graphical reasoning (scatterplots)
	•	Python application of OLS regression and output interpretation

Exam-style questions:
	•	Define and interpret each OLS assumption
	•	Identify assumption violations from written or visual data context
	•	Show algebraic derivations for unbiasedness or variance
	•	Compute confidence intervals using OLS estimates and standard errors
	•	Interpret regression output (standard error, t-stat, p-value)
	•	Evaluate hypothesis test given coefficient estimate and confidence interval

Equations to know:
	•	OLS Slope Estimator:
\hat{\beta}_1 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2}
	•	Intercept Estimator:
\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}
	•	Bias of OLS Slope Estimator:
\mathbb{E}[\hat{\beta}_1 | X] = \beta_1 \Rightarrow \text{Unbiased if CMI holds}
	•	Variance of OLS Slope Estimator:
\text{Var}(\hat{\beta}_1 | X) = \frac{\sigma^2}{\sum (X_i - \bar{X})^2}
	•	Approximate Variance:
\text{Var}(\hat{\beta}_1) \approx \frac{\sigma^2}{n \cdot \text{Var}(X)}
	•	Standard Error:
\text{SE}(\hat{\beta}_1) = \frac{S_u}{\sqrt{\sum (X_i - \bar{X})^2}}
	•	Confidence Interval:
\hat{\beta}_1 \pm 1.96 \cdot \text{SE}(\hat{\beta}_1)
	•	T-statistic (Python calls it Z):
t = \frac{\hat{\beta}_1}{\text{SE}(\hat{\beta}_1)}
	•	P-value decision rule: reject H0 if p-value < 0.05

Diagrams to master:
	•	Scatterplot with regression line and outlier effect:
	•	Show how a single large outlier can rotate the OLS line
	•	Label: outlier, regression line with/without outlier, slope change
	•	Scatterplot showing heteroskedasticity vs homoskedasticity:
	•	Varying spread of residuals over X
	•	Interpret residual variance change with increasing X
	•	Graphical interpretation of unbiasedness:
	•	Two scatterplots:
	•	One where PRF is centered (zero mean error, unbiased intercept)
	•	One offset (non-zero error mean, biased intercept)
	•	Label: PRF, estimated line, vertical residuals

Extra notes:
	•	Beta_1 is focus for causal inference; beta_0 is less meaningful
	•	Bias in beta_0 exists unless we assume E[U] = 0
	•	Central Limit Theorem used to justify normality of estimator distribution
	•	Confidence intervals, t-statistics, and p-values yield equivalent decisions
	•	In Python output:
	•	Coefficients: intercept and STR (slope)
	•	Standard errors directly match formulas
	•	T-statistics are beta/SE
	•	P-values are interpreted vs 5% threshold
	•	Interpreting output: if confidence interval does not include 0, reject H0
	•	Reminder: standard error formula uses sample versions Su and Sx

Key derivation steps (slope estimator expected value):
	1.	Substitute regression model into OLS formula
	2.	Use properties of summation to isolate beta_1 and error term
	3.	Apply expectation laws and assumption 1
	4.	Conclude E[\hat{\beta}_1 | X] = \beta_1

Key derivation steps (slope estimator variance):
	1.	Use \text{Var}(\hat{\beta}_1 | X)
	2.	Pull constants outside the variance expression
	3.	Apply assumption 2 for sum of variances
	4.	Apply assumption 4 to reduce to \sigma^2
	5.	Final result: \frac{\sigma^2}{\sum (X_i - \bar{X})^2}

Key derivation steps (intercept bias):
	1.	\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}
	2.	Show that E[\hat{\beta}_0 | X] = \beta_0 + \mu_U unless \mu_U = 0
	3.	Therefore, intercept is biased unless zero mean error is assumed

Practice expectations:
	•	Python used for computation but not required for manual derivations
	•	Expected to derive beta_1 formulas from scratch
	•	Use graphical examples to reason about assumptions and violations
	•	Interpreting regression table output: coefficients, SE, t, p-value

Summary:
This unit covers foundational OLS assumptions necessary for unbiasedness and consistency of estimators, derivation of the expected value and variance of the OLS slope estimator, confidence intervals and hypothesis tests for beta_1, graphical understanding of regression line behavior under different data conditions, and critical reading of Python regression output. Core focus is on slope, not intercept. Assumptions 1-3 are essential; assumption 4 is a simplifying assumption that will later be relaxed. Mastery of derivations and their connection to each assumption is key.
# Week 6
**Week 6 Curriculum Summary – Simple Linear Regression & Related Concepts**

---

**Topic Title: Course Logistics and Assignment Submission**

**What to learn:**
- Assignments are due Week 6 with a 3-hour grace period mentioned.
- Marking will be returned in Week 7.
- Indicative participation marks between 0–5 will be released early Week 7.
- Participation marks reflect tutorial attendance/engagement.

**Not in scope:**
- Specific criteria or rubrics for assignments or participation marks.

**Methods/tools used:**
- Tutorial engagement tracked informally.
- Marks negotiation occurs with tutors, not the lecturer.

**Exam-style questions:**
- None directly, but may relate to course operations.

---

**Topic Title: Exam Instructions and Expectations**

**What to learn:**
- Closed-book exam: no calculator or permitted materials.
- Know or derive key formulas (especially OLS estimator).
- Focus on derivations covered in workshops and lectures.
- Final exam is cumulative and derivation-heavy.

**Not in scope:**
- Use of formula sheets or external aids.

**Methods/tools used:**
- Pen and supplied exam book only.

**Exam-style questions:**
- Direct derivation of formulas from lectures/workshops.
- Conceptual explanation of unbiased estimators.

**Equations to know:**
- OLS formula:  
  \[ \hat{\beta}_1 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2} \]

**Diagrams to master:**
- None directly, but visual intuition of regression fit helps.

---

**Topic Title: Measures of Fit (R², RSS, ESS, TSS)**

**What to learn:**
- Definitions:
  - TSS: \( \sum (Y_i - \bar{Y})^2 \)
  - ESS: \( \sum (\hat{Y}_i - \bar{Y})^2 \)
  - RSS: \( \sum (Y_i - \hat{Y}_i)^2 \)
  - \( R^2 = \frac{ESS}{TSS} = 1 - \frac{RSS}{TSS} \)
- Interpretation:
  - \( R^2 = 0 \): regressor explains none of the variation
  - \( R^2 = 1 \): regressor explains all variation
- \( R^2 \in [0,1] \)
- In simple regression, \( R^2 = \text{corr}(X, Y)^2 \)

**Not in scope:**
- Adjusted \( R^2 \), F-tests (not yet introduced)

**Methods/tools used:**
- Python/statistical software reports TSS/ESS/RSS

**Exam-style questions:**
- Derive decomposition: \( TSS = ESS + RSS \)
- Conceptual meaning of \( R^2 \) values
- Interpret regression output with calculated \( R^2 \)

**Equations to know:**
- \( TSS = ESS + RSS \)
- \( R^2 = \frac{ESS}{TSS} = 1 - \frac{RSS}{TSS} \)

**Diagrams to master:**
- Two scatterplots with tight vs. loose residuals to show high/low fit

---

**Topic Title: Binary Regressors and Interpretation**

**What to learn:**
- Dummy variable coding: 0 or 1
- Interpretation:
  - Slope \( \hat{\beta}_1 \): difference in group means
  - Intercept \( \hat{\beta}_0 \): mean of reference group
- Example: smoker = 1, non-smoker = 0
  - Difference in birth weights reflects effect of smoking

**Not in scope:**
- Logistic regression or probability models

**Methods/tools used:**
- T-tests and regression used interchangeably

**Exam-style questions:**
- Explain how dummy variables change interpretation
- Derive regression equation from group averages
- Interpret output from dummy-variable regressions

**Equations to know:**
- \( Y = \beta_0 + \beta_1 D + u \), where \( D \in \{0,1\} \)

**Diagrams to master:**
- Bar charts comparing group means

---

**Topic Title: Gauss-Markov Theorem (BLUE Estimator)**

**What to learn:**
- OLS is Best Linear Unbiased Estimator (BLUE)
- Conditions: linear in Y, unbiased, minimal variance
- Applies under assumptions including homoskedasticity

**Not in scope:**
- Nonlinear or biased estimators

**Methods/tools used:**
- Proof structure from earlier weeks reused

**Exam-style questions:**
- State and explain BLUE conditions
- Identify violations leading to loss of BLUE status

**Equations to know:**
- \( \hat{\beta}_1 = \frac{\sum (X_i - \bar{X})(Y_i - \bar{Y})}{\sum (X_i - \bar{X})^2} \)

**Diagrams to master:**
- Conceptual: variance in residuals illustrated visually

---

**Topic Title: Heteroskedasticity and Robust Standard Errors**

**What to learn:**
- Homoskedasticity: constant variance of errors
- Heteroskedasticity: variance of errors depends on X
- Use HC1 robust SEs by default in Python
- Point estimates remain unchanged; standard errors differ
- Correct T-stats/confidence intervals only with correct SEs

**Not in scope:**
- HC2–HC4 methods (mentioned only)

**Methods/tools used:**
- Python code for robust SE:
  ```python
  model.fit(cov_type='HC1')
  ```

**Exam-style questions:**
- Conceptual differences in SEs under heteroskedasticity
- Calculate new SE with robust formula (given residuals)

**Equations to know:**
- \( SE(\hat{\beta}_1) = \sqrt{ \frac{1}{\sum (X_i - \bar{X})^2} \sum (X_i - \bar{X})^2 \hat{u}_i^2 } \)

**Diagrams to master:**
- Residuals fan out/shrink across X in heteroskedastic plots

---

**Topic Title: Properties of OLS Under Transformations**

**What to learn:**
- Model 1: standard OLS
- Model 2: transformed variables via scaling
  - \( \gamma_1 = \frac{a}{b} \beta_1 \)
  - \( \gamma_0 = a \beta_0 \)
- Model 3: transformed via addition
  - \( \delta_1 = \beta_1 \)
  - \( \delta_0 = \beta_0 + a - b \beta_1 \)

**Not in scope:**
- Log transformations or nonlinear transformations

**Methods/tools used:**
- Algebraic manipulation of OLS formulas

**Exam-style questions:**
- Predict regression results under transformations
- Prove properties of intercept/slope under transformations

**Equations to know:**
- \( \hat{\gamma}_1 = \frac{a}{b} \hat{\beta}_1 \)
- \( \hat{\delta}_0 = \hat{\beta}_0 + a - b\hat{\beta}_1 \)

**Diagrams to master:**
- Shifted datasets (additive) → same slope, moved intercept
- Scaled datasets → altered slope and intercept

---

**Topic Title: Derivations and Algebraic Identities**

**What to learn:**
- Proof that \( TSS = ESS + RSS \)
- If \( \hat{\beta}_1 = 0 \), then \( R^2 = 0 \)
- Use summation identities and orthogonality of residuals

**Not in scope:**
- Symbolic calculus or matrix algebra

**Methods/tools used:**
- Add-and-subtract trick for derivations
- Orthogonality: \( \sum \hat{u}_i = 0 \), \( \sum \hat{u}_i X_i = 0 \)

**Exam-style questions:**
- Full derivation of decomposition formula
- Show specific result holds under special assumption

**Equations to know:**
- \( TSS = \sum (Y_i - \bar{Y})^2 \)
- \( ESS = \sum (\hat{Y}_i - \bar{Y})^2 \)
- \( RSS = \sum (Y_i - \hat{Y}_i)^2 \)
- \( R^2 = \frac{ESS}{TSS} \)

**Diagrams to master:**
- Visual proof of decomposition with vertical distances

---

**General Exam Strategy:**
- Focus on derivations seen in workshops.
- Know formula structure and manipulation.
- Use Python output as practice for interpreting model results.
- Master binary variable interpretation.
- Always use heteroskedasticity-robust SEs unless stated.

--- 

End.
# Week 7
**Topic: Multiple Linear Regression Model (Econometrics)**

**What to Learn:**
- Definition and structure of the multiple regression model with K regressors + intercept
- Population Regression Function (PRF) interpretation in multivariate context
- Conditional expectation interpretation and partial effects
- Extension of OLS estimator to multiple regression (minimizing RSS)
- The concept and necessity of “holding all else constant” in interpretation
- First-order conditions for multiple regression, analytical derivation (2 regressor case)
- Variance and distribution of OLS estimator under multiple regression
- Role and use of standard errors, t-statistics, p-values, confidence intervals
- Robustness to heteroskedasticity (use of robust standard errors)
- Interpretation of coefficients in the presence of multiple regressors
- Consequences of including/excluding regressors (omitted variable bias, indirect effects)
- Joint hypothesis testing using F-statistics
- Perfect multicollinearity and its detection/prevention
- Use of Python (statsmodels) for regression estimation and hypothesis testing
- Application to real data (education dataset with test scores, STR, ELPCT, expenditure)

**Not in Scope:**
- Derivation of OLS standard errors using linear algebra (left for advanced/graduate level)
- Visual representation of high-dimensional RSS minimization problems
- Exact covariance matrix structure or matrix algebra methods
- Weighted regression, GLS, or advanced estimators

**Methods/Tools Used:**
- Python (statsmodels.OLS) for estimation
- Use of robust=True option for heteroskedasticity-robust standard errors
- Use of `.summary()` and `.f_test()` methods
- Manual derivation (paper-and-pencil) for small-K models (K = 2)
- Histogram analysis for detecting outliers

**Exam-Style Questions:**
- Explain the interpretation of beta coefficients in a multiple regression model
- Derive the OLS estimators for a 2-regressor model without an intercept
- Interpret changes in coefficients between simple and multiple regression
- Compute and interpret F-statistics for joint hypothesis tests
- Identify and explain violations of OLS assumptions in a given dataset
- Discuss consequences of multicollinearity or outliers in regression models
- Perform regression interpretation based on output tables

**Equations to Know:**
- Multiple regression model: \( Y_i = \beta_0 + \beta_1X_{1i} + ... + \beta_KX_{Ki} + u_i \)
- OLS objective function: \( \min_{\beta} \sum_{i=1}^n (Y_i - \beta_0 - \sum_{j=1}^K \beta_j X_{ji})^2 \)
- Estimator formulas (2-variable, no intercept):
  \[ \hat{\beta}_1 = \frac{\sum X_{1i} Y_i - \hat{\beta}_2 \sum X_{1i}X_{2i}}{\sum X_{1i}^2} \]
  \[ \hat{\beta}_2 = \frac{\sum X_{2i} Y_i - \hat{\beta}_1 \sum X_{1i}X_{2i}}{\sum X_{2i}^2} \]
- Intercept formula (with intercept): \( \hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}_1 - \hat{\beta}_2 \bar{X}_2 \)
- T-statistic: \( t = \frac{\hat{\beta}_j}{SE(\hat{\beta}_j)} \)
- F-statistic (joint test): \( F = \frac{1}{q}(t_1^2 + t_2^2 - 2 \rho_{13} t_1 t_3)/(1 - \rho_{13}^2) \)
- Sample covariance condition: \( \sum (X_{1i} - \bar{X}_1)(X_{2i} - \bar{X}_2) = 0 \)

**Diagrams to Master:**
- None required for visualisation of high-dimensional minimization
- Understand visual difference between regressions with and without outliers (via scatter plots)
- Visualisation of histograms for identifying outliers
- Conceptual diagram: regression line tilting due to outliers (not required to draw, but understand effect)

**Topic: Assumptions for Valid OLS in Multiple Regression**

**What to Learn:**
- Conditional Mean Independence (CMI): \( E[u_i | X_1, ..., X_K] = 0 \)
- Random sampling assumption for data validity
- No extreme outliers in regressors and dependent variable
- Allowance for heteroskedasticity (relax homoskedasticity)
- Multicollinearity (No perfect linear dependence among regressors)
- Implication of violations: biasedness, inefficiency, incorrect inference

**Not in Scope:**
- Exact modeling of variance function under heteroskedasticity
- Advanced diagnostics (e.g., VIF, condition numbers)

**Methods/Tools Used:**
- Conceptual validation of assumptions
- Use of histograms to detect outliers
- Python will detect perfect multicollinearity errors

**Exam-Style Questions:**
- State and interpret the four key OLS assumptions for the multiple regression model
- Identify and correct issues in a dataset violating assumptions

**Equations to Know:**
- Conditional Mean Independence: \( E[u_i | X_1, ..., X_K] = 0 \)
- Heteroskedasticity-robust SEs calculated via software
- Covariance condition: \( \text{Cov}(X_1, X_2) = 0 \Rightarrow \hat{\beta}_1 \text{ same as simple regression} \)

**Diagrams to Master:**
- Outlier influence on regression line (scatterplots)

**Topic: Application of Model to California Education Data**

**What to Learn:**
- Dependent variable: test scores of school districts
- Explanatory variables: STR (student-teacher ratio), ELPCT (English learner %), EXPEND (expenditure per student)
- Interpretation of each regressor’s effect, with “holding constant” condition
- Interpretation of change in coefficient magnitude and significance after adding variables
- Joint test of significance of regressors using F-test
- Practical interpretation: STR effect becomes less significant with controls added
- Explanation for indirect effects and overestimation in simple models

**Not in Scope:**
- Prediction using model or ML extensions
- Causal inference beyond model assumptions

**Methods/Tools Used:**
- Python regression output tables
- `.f_test()` for joint hypothesis testing
- Interpretation based on t-stats and p-values

**Exam-Style Questions:**
- Interpret changes in STR coefficient between simple and multiple models
- Conduct and interpret an F-test for multiple coefficients
- Justify why a coefficient might be significant in one model but not in another

**Equations to Know:**
- Multiple regression estimates from data
- F-test null: \( H_0: \beta_1 = \beta_3 = 0 \)
- Use of regression output for interpretation (intercept, slope, SE, t, p)

**Diagrams to Master:**
- Tabular regression output reading
- Mapping output to interpretation and hypothesis testing

**Topic: Assignment Reflection (Weight on Earnings)**

**What to Learn:**
- Regression and t-test comparison for weight on earnings
- Effect of sample peculiarities (e.g., outlier values at 501 lbs)
- Role of indirect effects (e.g., gender effect captured by weight)
- Interpretation of positive coefficients in context
- Caution against causal interpretation without further controls

**Not in Scope:**
- Modelling BMI or health effects
- Detailed causal inference

**Methods/Tools Used:**
- Simple regression
- Binary variable for above/below median
- T-tests and OLS for comparison

**Exam-Style Questions:**
- Discuss potential omitted variable bias
- Reflect on regression output and suggest further analysis

**Equations to Know:**
- T-test statistic, regression slope interpretation

**Diagrams to Master:**
- Scatter plots of earnings vs. weight
- Histogram for identifying unusual weight distribution

---

This structure reflects the explicit and implicit curriculum covered in the lecture content, emphasizing both conceptual understanding and technical proficiency with statistical software for applied econometric modeling.


# Week 8
Topic: Assignment 2 and General Housekeeping

What to learn:
	•	Assignment 2 covers material up to and including Lecture 9, especially multiple regression and functional forms.
	•	Expect a 3–4 hour workload.
	•	Less direct overlap with computer labs compared to Assignment 1.
	•	A quiz is scheduled next week, covering approximately the last 4 weeks of content.

Not in scope:
	•	Specific technical implementation of assignment questions unless mentioned.
	•	Deep coding practice; assumed prior from Assignment 1.

Methods/tools used:
	•	Python coding.
	•	Regression modelling with functional forms.

Exam-style questions:
	•	Expect applied regression interpretation.
	•	Possibly conceptual MCQs or written questions on omitted variable bias (OVB), functional forms.

Equations to know:
	•	None specific here; see later sections.

Diagrams to master:
	•	Not relevant in this section.

⸻

Topic: Omitted Variable Bias (OVB)

What to learn:
	•	OVB arises when a relevant explanatory variable (e.g., X₂) is excluded from a regression model.
	•	Understand conditions under which OVB arises:
	•	Omitted variable is a determinant of Y.
	•	Omitted variable is correlated with included variable(s).
	•	Effect on bias:
	•	Estimate of β₁ becomes biased.
	•	Bias direction determined by sign of β₂ and Cov(X₁, X₂).

Not in scope:
	•	Instrumental variables (only briefly referenced for advanced study).
	•	Formal derivation beyond basic proof structure.

Methods/tools used:
	•	Use of covariance and expectation rules to derive bias formula.
	•	Thought experiments using oracle model.
	•	Applied interpretation through practical examples (e.g., Mozart effect).

Exam-style questions:
	•	Derive or identify omitted variable bias formula.
	•	Explain conditions for unbiasedness.
	•	Discuss examples of biased estimation due to omission.
	•	Interpret regression output under potential OVB.

Equations to know:
	•	Bias formula:
E[β̂₁] = β₁ + β₂ * Cov(X₁, X₂) / Var(X₁)
	•	Regression model transformation:
Y = β₁X₁ + β₂X₂ + U
becomes:
Y = β₁X₁ + W, where W = β₂X₂ + U

Diagrams to master:
	•	Not required here, but be prepared to sketch schematic diagrams showing correlation paths (e.g., indirect effects via omitted variables).

⸻

Topic: Interpreting Regression Coefficients and Bias

What to learn:
	•	β̂₁ captures both:
	•	Direct effect of X₁ on Y.
	•	Indirect effect of omitted X₂ on Y via its correlation with X₁.
	•	Understand why OVB prevents causal interpretation.
	•	Real-world applications: Mozart effect, returns to education.

Not in scope:
	•	Full identification strategies for causal inference (e.g., RCTs, IVs)—only conceptually discussed.

Methods/tools used:
	•	Causal diagrams (conceptual).
	•	Multiple regression for isolating effects.
	•	Simulation thought experiments (e.g., assigning babies randomly).

Exam-style questions:
	•	Discuss why β̂₁ may not represent the causal effect.
	•	Propose control variables to mitigate OVB.
	•	Identify bias direction given signs of β₂ and Cov(X₁, X₂).

Equations to know:
	•	Same as above.

Diagrams to master:
	•	Stylised path diagrams showing confounding.

⸻

Topic: Randomised Controlled Trials (RCTs) vs. Observational Studies

What to learn:
	•	Why random assignment removes OVB.
	•	Ideal research design to uncover causal effect.
	•	Observational data cannot ensure unbiasedness without controls.
	•	Causal effect = effect under ideal RCT design.

Not in scope:
	•	Implementation of RCTs.
	•	Statistical inference from RCTs (beyond scope).

Methods/tools used:
	•	Random assignment thought experiment.
	•	Conceptual causal inference reasoning.

Exam-style questions:
	•	Compare causal inference from RCTs vs observational regressions.
	•	Critically evaluate regression designs (e.g., instrument playing and salary).
	•	Propose experimental designs for causal inference.

Equations to know:
	•	None new; interpret bias formula under random assignment (bias = 0).

Diagrams to master:
	•	Conceptual assignment group comparisons.

⸻

Topic: Return to Education Case Study

What to learn:
	•	Estimating causal return to education is confounded by unobserved ability.
	•	Regression:
log(wage) = β₀ + β₁ * education + β₂ * experience + u
	•	Interpretation:
β₁ ≈ % return to 1 extra year of education.
	•	OVB likely positive if ability is positively correlated with education and wage.
	•	Empirical challenges in isolating β₁.
	•	Role of panel datasets (e.g., HILDA).

Not in scope:
	•	Instrumental variables methods (briefly named but not developed).

Methods/tools used:
	•	Multiple regression with control variables.
	•	Use of logs to interpret β as % change.

Exam-style questions:
	•	Interpret regression coefficient in log-linear model.
	•	Explain why β̂₁ may be biased upward.
	•	Discuss omitted variable (e.g., ability) and its effect on results.
	•	Contrast simple and multiple regressions.

Equations to know:
	•	log(wage) = β₀ + β₁ * education + β₂ * experience + u
	•	% interpretation:
β̂₁ = estimated % increase in wage per additional year of education

Diagrams to master:
	•	Wage vs education curve (conceptual, with and without bias).

⸻

Topic: Frisch-Waugh-Lovell (FWL) Theorem

What to learn:
	•	FWL shows that the coefficient on X₁ in a multiple regression equals the coefficient from:
	1.	Regress X₁ on other Xs → get residuals (X₁~)
	2.	Regress Y on other Xs → get residuals (Y~)
	3.	Regress Y~ on X₁~
	•	Demonstrates how multiple regression isolates “pure” effect of X₁.
	•	Conceptual understanding only.

Not in scope:
	•	Formal proof.
	•	Manual calculation unless guided by assignment/code.

Methods/tools used:
	•	Residual-based regression steps.
	•	Conceptual “partialing out” logic.

Exam-style questions:
	•	True/false conceptual questions.
	•	Explain what FWL tells us about multiple regression.

Equations to know:
	•	None to derive; understand structure:
	•	β̂₁ = coefficient from regression of Y~ on X₁~

Diagrams to master:
	•	No visuals required, but conceptual block-diagram of regression steps may help.

⸻

Topic: Measures of Fit in Multiple Regression

What to learn:
	•	R² formula unchanged:
R² = 1 − RSS/TSS
	•	R² always increases with additional regressors.
	•	Adjusted R² penalises for extra regressors:
R̄² = 1 − [(RSS/(n − k − 1)) / (TSS/(n − 1))]
	•	Understand why adjusted R² may go down.
	•	Adjusted R² is preferred measure in multiple regression.
	•	Standard error of regression (SER):
SER = √(RSS / (n − k − 1))

Not in scope:
	•	R² derivation.
	•	R² as a test statistic.

Methods/tools used:
	•	Algebraic manipulation.
	•	Intuition for model complexity penalty.

Exam-style questions:
	•	Define/interpret R² and adjusted R².
	•	Calculate R² or R̄² from given data.
	•	Explain why R² always increases but R̄² might not.
	•	Identify which model fits better based on R̄².

Equations to know:
	•	R² = 1 − RSS/TSS
	•	R̄² = 1 − [(RSS/(n − k − 1)) / (TSS/(n − 1))]
	•	SER = √(RSS / (n − k − 1))

Diagrams to master:
	•	Not required.

⸻

Topic: Applied Causality Evaluation (Sleep Study Example)

What to learn:
	•	Applied reasoning for spurious correlation.
	•	OVB critique of observational causal claims.
	•	Important to distinguish correlation from causation.
	•	Typical biases: reverse causality, omitted variables, selection bias.

Not in scope:
	•	Statistical testing for causality.

Methods/tools used:
	•	Critical thinking.
	•	OVB framework application.

Exam-style questions:
	•	Short-answer: critique causal claim.
	•	Identify omitted/confounding variables.

Equations to know:
	•	Conceptual; link back to OVB bias term.

Diagrams to master:
	•	None, but causal flow charts (e.g., DAGs) may be used illustratively.

⸻

Final Notes

General Skills Required:
	•	Interpret regression coefficients (level/log/log-log models).
	•	Spot and explain omitted variable bias.
	•	Use R², adjusted R², and SER properly.
	•	Apply OVB reasoning in practical settings.
	•	Engage with causal vs correlation reasoning.

Don’t Learn:
	•	Full derivations or proofs (FWL, adjusted R²).
	•	Advanced methods (IVs, RCTs implementation).
	•	Formal causality frameworks (e.g., potential outcomes).

Expect:
	•	Applied reasoning questions.
	•	Regression output interpretation.
	•	Conceptual derivations of bias.
	•	Discussions of assumptions and model validity.
# Week 9
# Weeo 10

Use the curriculum to answer the uploaded question. IF you can't give a definitive answer from the curriculum, say you don't know. Assume you only know whats on the curriculum.