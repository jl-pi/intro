# Category-Partition Method

## Steps:

### 1. Categorize **the inputs and environmental conditions** to determine the general categories of program input parameters and environment variables.

### 2. Partition each Category into Choices

### 3. Add constraints (minimize) to remove invalid combinations and reduce the exceptions.

### 4. generate combinations

example: give 25% of discount on the raw amount of the cart when it's Christmas.

calculate(date, raw_amount)

2 parameters: date, raw_amount

**categorize les inputs:**

date[christmas,non-christmas]
raw_amount[positive,0,negative]

add constraints to minimize (no need to consider negative raw_amount [exception])

generate the final combinations
