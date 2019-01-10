# Sequence
Sequence is a versatile SQL string builder built with the a fluid API in mind -- each builder is chainable, and can be interpolated into template literals. Using the `ISequenceBuilder` implementations such as `Select`, you can build any SQL statement to suit your needs -- if not, the entire library has been designed by interface allowing extension in any way you can think of.

## Usage
To use this in your project, follow the simple examples below

### SELECT Statements
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
### INSERT Statements
```typescript
// Create your columns.
const columnA: ISequenceColumn = new SequenceColumn(Predicate.None, "userName")
const columnB: ISequenceColumn = new SequenceColumn(Predicate.None, "userPassword")

// Build your statement
const insert: ISequenceBuilder = new Insert()
    .into("user", columnA, columnB)
    .values(`'crowes'`, 1234);

// Stringify your statement.
const sql: string = insert.stringify();
// INSERT INTO user (userName, userPassword) VALUES ('crowes', 1234)
```
