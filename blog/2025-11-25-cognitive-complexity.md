---
authors:
  name: Eldar Pashazade
  title: Frontend Developer
  url: https://eldarlrd.is-a.dev
  image_url: https://github.com/eldarlrd.png
  email: eldarlrd@pm.me
tags: [neuroscience, psychology]
keywords: [neuroscience, psychology]
image: https://mstone.ai/wp-content/uploads/2025/02/img-reduce-cognitive-complexity.jpg
---

# 🧠 Cognitive Complexity

**Explaining cognitive complexity measurement for writing cleaner & more maintainable code.**

A new method [published by the SonarSource in 2017,](https://sonarsource.com/docs/CognitiveComplexity.pdf) overcoming the shortcomings of Cyclomatic Complexity, helping to better identify
problematic code fragments in large codebases written in modern languages. It also tries to better reflect the mental model of a
software developer, rather than strictly following an arbitrary mathematical model.

<!-- truncate -->

### Problem

The best way to illustrate this problem is by starting with showing code fragments of varying complexity and why it’s necessary to have
measurement tools in the first place.

<span class='text--center'>
  [![A linked list](https://mstone.ai/wp-content/uploads/2025/02/img-increased-cognitive-complexity.jpg 'Code problems counted & 
visualized')](https://blog.devgenius.io/sonarqube-cognitive-complexity-265640dbad3e)
</span>

Here’s a straightforward, simple example of a summarizer written in Python.

```python title='Sum all numbers in an array.'
def sum_of_numbers(numbers):
    total = 0

    for num in numbers:
        total += num

    return total
```

It consists of a single loop, has no nested conditions, and is easy to read & understand, resulting in a very low cognitive load.

Meanwhile, the code below is overly complicated and awkward, making it difficult to understand at a glance, increasing cognitive load
substantially.

```python title='Authenticate & Authorize the user.'
def authenticate_and_authorize(user, password, roles):
    if not user or not password:
        return 'Missing credentials'

    if len(password) < 8:
        return 'Password too short'

    if not any(char.isdigit() for char in password):
        return 'Password must contain a digit'

    if not any(char.isupper() for char in password):
        return 'Password must contain a capital letter'

    if not user.get('active', False):
        return 'Inactive account'

    if user.get('locked', False):
        return 'Account locked'

    if user.get('password') != password:
        return 'Invalid password'

    if roles and user.get('role') not in roles:
        return 'Role not allowed'

    return 'Access granted'
```

This function is obviously a mess, it’s very clear that something must be done about it to simplify and make it more pleasant to the eye.

Something like this, is far better and clearly highlights the issue.

```python title='Authenticate & Authorize the user (clean version).'
def authenticate_and_authorize(user, password, roles=None):
    if not user or not password:
        return 'Missing credentials'

    error = run_checks(
        lambda: validate_password(password),
        lambda: check_account(user),
        lambda: verify_password(user, password),
        lambda: check_role(user, roles),
    )

    return error or 'Access granted'
```

While the overall file increased in size due to code splitting, the main function is now very easy to wrap your head around.

### Methodology

Cognitive Complexity is measured by the following three rules:

1. **Ignore structures that allow multiple statements to be readably shorthanded
   into one.**
2. **Increment (add one) for each break in the linear flow of the code.**
3. **Increment when flow-breaking structures are nested.**

Complexity score uses four different types of increments:

- **Nesting** - assessed for nesting control flow structures inside each other.
- **Structural** - assessed on control flow structures that are subject to a nesting
  increment, and that increase the nesting count.
- **Fundamental** - assessed on statements not subject to a nesting increment.
- **Hybrid** - assessed on control flow structures that are not subject to a nesting
  increment, but which do increase the nesting count.

This distinction makes it useful to understand where the score is coming from and what exactly is the problem with the code block.

Here are concrete examples considered to make the score better reflect what software developers think of code.

- **Shorthands are ignored.**
- **Loops, recursions add increment.**
- **Conditionals, catches, switches add increment.**

With all of this taken into account, these would be the general suggestions to lower the score, thus writing cleaner code.

<span class='text--center'>
  [![A colored chart](https://mstone.ai/wp-content/uploads/2025/02/img-reduce-cognitive-complexity.jpg 'Chart of emerging suggestions')](https://mstone.ai/glossary/cognitive-complexity)
</span>

- **Break down large functions into smaller methods.**
- **Flatten nested structures with early returns.**
- **Adopt clear, consistent naming conventions.**
- **Leverage analysis tools such as linters & formatters.**
- **Teamwork helps unwrap & explain problematic code.**

### Conclusion

By using the explained methodology, applying the aforementioned suggestions and following the emerging guidelines software engineers
will be able to write better, cleaner code with efficiency and ease, being able to better understand which parts of code need
refactoring and the exact reasons why.

Happy Coding!
