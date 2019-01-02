export declare class Insert extends SequenceBuilder implements ISequenceBuilder {
    supplement: ISequenceSupplement;
    constructor();
    into(tableName: string, ...columns: ISequenceColumn[]): this;
    values(...values: any[]): this;
    stringify(): string;
}

export declare class Select extends SequenceBuilder implements ISequenceBuilder {
    all(): this;
    column(predicate: Predicate, columnName: string): this;
    from(tableName: string): this;
    where(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: string | number): this;
    whereIn(column: ISequenceColumn, ...values: any[]): void;
    whereNotIn(column: ISequenceColumn, ...values: any[]): void;
    stringify(): string;
}

export declare abstract class SequenceBuilder implements ISequenceBuilder {
    condition: ISequenceCondition;
    location: ISequenceLocation;
    operation: ISequenceOperation;
    joins: ISequenceJoin[];
    ordering: ISequenceDefault;
    grouping: ISequenceDefault;
    limitation: LimitDefault;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringifyJoins(): string;
    stringify(): string;
    toString(): string;
}

export declare class SequenceColumn extends SequencePart implements ISequenceColumn {
    predicate: Predicate;
    name: string;
    constructor(predicate: Predicate, name: string);
    stringify(): string;
    static stringifyPredicate(predicate: Predicate): string;
}

export declare class SequenceCondition extends SequencePart implements ISequenceCondition {
    readonly condition: Condition;
    readonly coalescingOperator: CoalescingOperator;
    readonly conditionals: ISequenceConditional[];
    constructor(condition: Condition, coalescingOperator: CoalescingOperator, ...conditionals: ISequenceConditional[]);
    stringify(): string;
    static stringifyCondition(condition: Condition): string;
}

export declare class SequenceConditional extends SequencePart implements ISequenceConditional {
    readonly conditional: Conditional;
    readonly column: ISequenceColumn;
    constructor(conditionalType: Conditional, column: ISequenceColumn);
    stringify(): string;
    static stringifyConditional(conditionalType: Conditional): string;
}

export declare class SequenceDefault extends SequencePart implements ISequencePart, ISequenceDefault {
    readonly default: Default;
    readonly coalescingOperator: CoalescingOperator;
    readonly sortings: ISequenceSorting[];
    constructor(defaultType: Default, coalescingOperator: CoalescingOperator, ...sortings: ISequenceSorting[]);
    stringify(): string;
    static stringifyDefaultType(defaultType: Default): "GROUP BY" | "ORDER BY" | "LIMIT";
}

export declare class SequenceJoin extends SequencePart implements ISequenceJoin {
    readonly join: Join;
    readonly location: string;
    condition: SequenceCondition;
    constructor(joinType: Join, location: string);
    on(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: string | number): this;
    onIn(column: ISequenceColumn, ...values: any[]): void;
    onNotIn(column: ISequenceColumn, ...values: any[]): void;
    stringify(): string;
    static stringifyJoinType(joinType: Join): string;
}

export declare class SequenceLocation extends SequencePart implements ISequenceLocation {
    readonly location: Location;
    readonly name: string;
    constructor(locationType: Location, name: string);
    stringify(): string;
    static stringifyLocation(location: Location): string;
}

export declare class SequenceOperation extends SequencePart implements ISequenceOperation {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
    constructor(operation: Operation, ...columns: ISequenceColumn[]);
    stringify(): string;
    static stringifyOperation(operationType: Operation): string;
}

export declare abstract class SequencePart implements ISequencePart {
    stringify(): string;
    toString(): string;
    static stringifyCoalescingOperator(coalescingOperator: CoalescingOperator): string;
    static stringifyWrapping(wrapping: Wrapping, values: any[]): string;
}

export declare class SequenceSorting extends SequencePart implements ISequencePart, ISequenceSorting {
    readonly column: ISequenceColumn;
    readonly arrangement: Arrangement;
    constructor(column: ISequenceColumn, arrangement: Arrangement);
    stringify(): string;
    static stringifyArrangement(arrangement: Arrangement): string;
}

export declare class SequenceSupplement extends SequencePart implements ISequenceSupplement {
    readonly supplement: Supplement;
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(supplement: Supplement, wrapping: Wrapping, ...values: any[]);
    stringify(): string;
    static stringifySupplement(supplement: Supplement): string;
}

export declare class CriteriaConditional extends SequenceConditional implements ISequenceConditional {
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(conditionalType: Conditional, column: ISequenceColumn, ...values: string[]);
    stringify(): string;
}

export declare class LogicalConditional extends SequenceConditional implements ISequenceConditional {
    readonly logicalOperator: LogicalOperator;
    readonly value: string | number;
    constructor(column: ISequenceColumn, logicalOperator: LogicalOperator, value: string | number);
    stringify(): string;
    static stringifyLogicalOperator(logicalOperator: LogicalOperator): ">" | ">=" | "=" | "<" | "<=" | "/" | "%";
}

export declare class LimitDefault extends SequenceDefault implements ISequenceDefault {
    readonly amount: number;
    constructor(amount?: number);
    stringify(): string;
}

export declare enum Arrangement {
    Ascending = 0,
    Descending = 1
}

export declare enum CoalescingOperator {
    None = 0,
    And = 1
}

export declare enum Condition {
    Where = 0,
    On = 1
}

export declare enum Conditional {
    Logical = 0,
    In = 1,
    NotIn = 2
}

export declare enum Default {
    OrderBy = 0,
    GroupBy = 1,
    Limit = 2
}

export declare enum Join {
    Inner = 0
}

export declare enum Location {
    From = 0,
    Into = 1
}

export declare enum LogicalOperator {
    GreaterThan = 0,
    GreaterThanOrEquality = 1,
    Equality = 2,
    LessThanOrEquality = 3,
    LessThan = 4,
    Division = 5,
    Modulo = 6
}

export declare enum Operation {
    Select = 0,
    Insert = 1
}

export declare enum Predicate {
    None = 0,
    Distinct = 1,
    Count = 2
}

export declare enum Supplement {
    Values = 0
}

export declare enum Wrapping {
    Parentheses = 0
}

export interface ISequenceBuilder {
    operation: ISequenceOperation;
    location: ISequenceLocation;
    condition: ISequenceCondition;
    joins: ISequenceJoin[];
    ordering: ISequenceDefault;
    grouping: ISequenceDefault;
    limitation: LimitDefault;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): any;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): any;
    limit(amount: number): any;
    stringify(): string;
}

export interface ISequenceColumn extends ISequencePart {
    predicate: Predicate;
    name: string;
}

export interface ISequenceCondition extends ISequencePart {
    condition: Condition;
    coalescingOperator: CoalescingOperator;
    conditionals: ISequenceConditional[];
}

export interface ISequenceConditional extends ISequencePart {
    readonly conditional: Conditional;
    readonly column: ISequenceColumn;
}

export interface ISequenceDefault extends ISequencePart {
    readonly default: Default;
    readonly sortings: ISequenceSorting[];
}

export interface ISequenceJoin extends ISequencePart {
    readonly join: Join;
    readonly location: string;
    condition: ISequenceCondition;
}

export interface ISequenceLocation extends ISequencePart {
    location: Location;
    name: string;
}

export interface ISequenceOperation extends ISequencePart {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
}

export interface ISequencePart {
    stringify(): string;
}

export interface ISequenceSorting {
    column: ISequenceColumn;
    arrangement: Arrangement;
}

export interface ISequenceSupplement extends ISequencePart {
    readonly supplement: Supplement;
    readonly wrapping: Wrapping;
    readonly values: any[];
}

export declare class IntoLocation extends SequenceLocation implements ISequenceLocation {
    readonly wrapping: Wrapping;
    readonly columns: ISequenceColumn[];
    constructor(tableName: string, ...columns: ISequenceColumn[]);
    stringify(): string;
    private getColumnsWithoutPredicate;
}

export declare class SelectionOperation extends SequenceOperation implements ISequencePart, ISequenceOperation {
    readonly columns: ISequenceColumn[];
    constructor(...columns: ISequenceColumn[]);
    stringify(): string;
}