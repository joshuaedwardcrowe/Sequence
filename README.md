# Sequence
Sequence is a versatile SQL string builder built with the a fluid API in mind -- each builder is chainable, and can be interpolated into template literals. Using the `ISequenceBuilder` implementations such as `Select`, you can build any SQL statement to suit your needs -- if not, the entire library has been designed by interface allowing extension in any way you can think of.

## Usage
To use this in your project, follow the simple examples below

```typescript
// Create your column.
const column: ISequenceColumn = new SequenceColumn(Predicate.None, "userName");

// Build your statement.
const select: ISequenceBuilder = new Select()
    .all()
    .from("user")
    .where(column, LogicalOperator.Equality, `'Crowes'`);

// Stringify your statement.
const sql: string = select.stringify();
// SELECT * FROM user WHERE userName = 'Crowes'
```
