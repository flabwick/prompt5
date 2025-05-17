**Task:**
You are given the contents of a .txt file containing raw extracted textbook material. Your goal is to identify all sections that appear to be **unformatted tables or figures**, and prepare a clean, minimal replacements.txt file to help replace these with image links in a Markdown document.

---

**You must output the following:**

A file in **strict format**, where each entry corresponds to one figure or table, and follows this exact block syntax:

txt
[TAG] Short descriptive title
---BOUNDS---
START: first 3–5 unique words in the block
END: last 3–5 unique words in the block
---END---


---

**Rules and Heuristics:**

1. **Detect unformatted tables/figures**:

   * Look for blocks with repeated columns of data or label/value pairs.
   * Often include column headers like “Observation”, “Year”, “Rate”, “Score”, etc.
   * Usually span multiple lines with structured, row-like formatting.
   * Often include notes at the end like “Note: ...” or “Source: ...”.

2. **TAG**:

   * Should be in format [TABLE 1.1], [FIGURE 2.2], etc.
   * If the source doesn’t specify a number, infer one based on order or section.

3. **Descriptive title**:

   * Use the full official caption or infer a short clear title from surrounding lines.
   * Example: Selected Observations on Cigarette Sales by State and Year.

4. **START and END**:

   * START: First 3–5 **unique** and identifying words from the block (preferably from the header line).
   * END: Last 3–5 **unique** words just before the unformatted block ends (often from a note or last row).

5. **Strict formatting**:

   * No deviations from the ---BOUNDS--- block structure.
   * Do not include the raw data itself.
   * Do not include markdown or links.

---

**Example Output:**

txt
[TABLE 1.1] Selected Observations on Test Scores and Other Variables for California School Districts in 1999
---BOUNDS---
START: TABLE 1.1 Selected Observations
END: Note: The California test score
---END---

[TABLE 1.2] Selected Observations on the Growth Rate of GDP and the Term Spread in the United States
---BOUNDS---
START: TABLE 1.2 Selected Observations
END: Note: The United States GDP
---END---


---

**Output file name:**
Always name it exactly: replacements.txt