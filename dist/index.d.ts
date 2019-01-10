export declare class Delete extends SequenceBuilder implements IDelete, ISequenceBuilder {
    constructor();
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringify(): string;
    private stringifyOperation;
}

export declare class Insert extends SequenceBuilder implements IInsert {
    supplement: ISequenceSupplement;
    constructor();
    into(tableName: string, ...columns: ISequenceColumn[]): this;
    values(...values: any[]): this;
    where(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this;
    whereIn(column: ISequenceColumn, ...values: any[]): this;
    whereNotIn(column: ISequenceColumn, ...values: any[]): this;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringify(): string;
}

export declare class Select extends SequenceBuilder implements ISelect {
    constructor();
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    stringify(): string;
}

export declare abstract class SequenceBuilder {
    condition: ISequenceCondition;
    location: ISequenceLocation;
    operation: ISequenceOperation;
    joins: ISequenceJoin[];
    ordering: ISequenceFormation;
    grouping: ISequenceFormation;
    limitation: LimitFormation;
    where(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this;
    whereIn(column: ISequenceColumn, ...values: any[]): void;
    whereNotIn(column: ISequenceColumn, ...values: any[]): void;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    protected stringifyBase(): string;
    private stringifyJoins;
}

export declare abstract class SequenceCoalescent extends SequencePart {
    private static stringifyCoalescingOperator;
    private static padCoalescingOperator;
    protected static coalesce(startingKeyword: string, coalescingOperator: CoalescingOperator, coalescables: ISequenceCoalescable[]): string;
}

export declare class SequenceColumn extends SequencePart implements ISequenceColumn, ISequenceCoalescable {
    predicate: Predicate;
    name: string;
    constructor(predicate: Predicate, name: string);
    stringify(): string;
    static stringifyPredicate(predicate: Predicate): string;
}

export declare class SequenceJoin extends SequencePart implements ISequenceJoin {
    readonly join: Join;
    readonly location: string;
    condition: SequenceCondition;
    constructor(join: Join, location: string);
    on(column: ISequenceColumn, logicalOperator: LogicalOperator, comparisonValue: any): this;
    onIn(column: ISequenceColumn, ...values: any[]): void;
    onNotIn(column: ISequenceColumn, ...values: any[]): void;
    stringify(): string;
    protected static stringifyJoin(joinType: Join): string;
}

export declare abstract class SequencePart {
    protected static stringifyWrapping(wrapping: Wrapping, values: any[]): string;
    protected static stringifyLogicalOperator(logicalOperator: LogicalOperator): ">" | ">=" | "=" | "<" | "<=" | "/" | "%";
}

export declare class SequenceSupplement extends SequencePart implements ISequenceSupplement, ISequencePart {
    readonly supplement: Supplement;
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(supplement: Supplement, wrapping: Wrapping, ...values: any[]);
    stringify(): string;
    static stringifySupplement(supplement: Supplement): string;
}

export declare class Update extends SequenceBuilder implements IUpdate, ISequenceBuilder {
    assignment: ISequenceAssignment;
    constructor();
    table(tableName: string): this;
    column(column: ISequenceColumn, value: any): this;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): this;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): this;
    limit(amount: number): this;
    stringify(): string;
}

export declare class SequenceAssignment extends SequenceCoalescent implements ISequenceAssignment, ISequenceCoalescent {
    assignment: Assignment;
    readonly coalescingOperator: CoalescingOperator;
    assignations: ISequenceAssignation[];
    constructor(assignment: Assignment, ...assignations: ISequenceAssignation[]);
    stringify(): string;
    protected static stringifyAssignment(assignment: Assignment): string;
}

export declare class SequenceAssignation extends SequencePart implements ISequenceAssignation, ISequenceCoalescable {
    column: ISequenceColumn;
    readonly logicalOperator: LogicalOperator;
    value: any;
    constructor(column: ISequenceColumn, value: any);
    stringify(): string;
}

export declare class SequenceCondition extends SequenceCoalescent implements ISequenceCondition {
    readonly condition: Condition;
    readonly coalescingOperator: CoalescingOperator;
    readonly conditionals: ISequenceConditional[];
    constructor(condition: Condition, coalescingOperator: CoalescingOperator, ...conditionals: ISequenceConditional[]);
    stringify(): string;
    protected static stringifyCondition(condition: Condition): string;
}

export declare class CriteriaConditional extends SequenceConditional implements ICriteriaConditional {
    readonly wrapping: Wrapping;
    readonly values: any[];
    constructor(conditional: Conditional, column: ISequenceColumn, ...values: any[]);
    stringify(): string;
}

export declare class LogicalConditional extends SequenceConditional implements ILogicalConditional {
    readonly logicalOperator: LogicalOperator;
    readonly value: any;
    constructor(column: ISequenceColumn, logicalOperator: LogicalOperator, value: any);
    stringify(): string;
}

export declare class SequenceConditional extends SequencePart implements ISequenceConditional, ISequenceCoalescable {
    readonly conditional: Conditional;
    readonly column: ISequenceColumn;
    constructor(conditionalType: Conditional, column: ISequenceColumn);
    stringify(): string;
    static stringifyConditional(conditionalType: Conditional): string;
}

export declare enum Arrangement {
    Ascending = 0,
    Descending = 1
}

export declare enum Assignment {
    Set = 0
}

export declare enum CoalescingOperator {
    None = 0,
    And = 1,
    Comma = 2
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

export declare enum Formation {
    OrderBy = 0,
    GroupBy = 1,
    Limit = 2
}

export declare enum Join {
    Inner = 0
}

export declare enum Location {
    From = 0,
    Into = 1,
    None = 2
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
    Insert = 1,
    Update = 2,
    Delete = 3
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

export declare class LimitFormation extends SequenceFormation implements ILimitFormation {
    readonly amount: number;
    constructor(amount?: number);
    stringify(): string;
}

export declare class SequenceFormation extends SequenceCoalescent implements ISequenceFormation, ISequenceCoalescent {
    readonly formation: Formation;
    readonly coalescingOperator: CoalescingOperator;
    readonly filters: ISequenceFilter[];
    constructor(defaultType: Formation, coalescingOperator: CoalescingOperator, ...filters: ISequenceFilter[]);
    stringify(): string;
    protected static stringifyFormation(defaultType: Formation): "GROUP BY" | "ORDER BY" | "LIMIT";
}

export declare class SequenceFilter extends SequencePart implements ISequenceFilter {
    readonly column: ISequenceColumn;
    readonly arrangement: Arrangement;
    constructor(column: ISequenceColumn, arrangement: Arrangement);
    stringify(): string;
    protected static stringifyArrangement(arrangement: Arrangement): string;
}

export interface IDelete {
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    stringify(): string;
}

export interface IInsert {
    supplement: ISequenceSupplement;
    into(tableName: string, ...columns: ISequenceColumn[]): this;
    values(...values: any[]): this;
    stringify(): string;
}

export interface ISelect {
    column(column: ISequenceColumn): this;
    from(tableName: string): this;
    stringify(): string;
}

export interface ISequenceBuilder {
    operation: ISequenceOperation;
    location: ISequenceLocation;
    condition: ISequenceCondition;
    joins: ISequenceJoin[];
    ordering: ISequenceFormation;
    grouping: ISequenceFormation;
    limitation: LimitFormation;
    orderBy(column: ISequenceColumn, arrangement: Arrangement): any;
    groupBy(column: ISequenceColumn, arrangement: Arrangement): any;
    limit(amount: number): any;
    stringify(): string;
    toString(): string;
}

export interface ISequenceCoalescable extends ISequencePart {
}

export interface ISequenceCoalescent extends ISequencePart {
    readonly coalescingOperator: CoalescingOperator;
}

export interface ISequenceColumn extends ISequencePart {
    predicate: Predicate;
    readonly name: string;
    stringify(): string;
}

export interface ISequenceJoin extends ISequencePart {
    readonly join: Join;
    readonly location: string;
    readonly condition: ISequenceCondition;
}

export interface ISequencePart {
    stringify(): string;
}

export interface ISequenceSupplement extends ISequencePart {
    readonly supplement: Supplement;
    readonly wrapping: Wrapping;
    readonly values: any[];
}

export interface IUpdate {
    assignment: ISequenceAssignment;
    table(tableName: string): this;
    column(column: ISequenceColumn, value: any): this;
}

export interface ISequenceAssignment extends ISequencePart {
    readonly assignment: Assignment;
    assignations: ISequenceAssignation[];
}

export interface ISequenceAssignation extends ISequencePart {
    readonly column: ISequenceColumn;
    readonly logicalOperator: LogicalOperator;
    readonly value: any;
}

export interface ISequenceCondition extends ISequencePart {
    readonly condition: Condition;
    conditionals: ISequenceConditional[];
}

export interface ICriteriaConditional {
    readonly wrapping: Wrapping;
    readonly values: any[];
}

export interface ILogicalConditional {
    readonly logicalOperator: LogicalOperator;
    readonly value: any[];
}

export interface ISequenceConditional extends ISequenceCoalescable {
    readonly conditional: Conditional;
    readonly column: ISequenceColumn;
}

export interface ILimitFormation {
    readonly amount: number;
}

export interface ISequenceFormation extends ISequencePart {
    readonly formation: Formation;
    readonly filters: ISequenceFilter[];
}

export interface ISequenceFilter extends ISequenceCoalescable {
    column: ISequenceColumn;
    arrangement: Arrangement;
}

export interface IIntoLocation {
    readonly wrapping: Wrapping;
    readonly columns: ISequenceColumn[];
}

export interface ISequenceLocation extends ISequencePart {
    readonly location: Location;
    readonly name: string;
}

export interface ISequenceOperation extends ISequencePart {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
}

export declare class IntoLocation extends SequenceLocation implements IIntoLocation {
    readonly wrapping: Wrapping;
    readonly columns: ISequenceColumn[];
    constructor(tableName: string, ...columns: ISequenceColumn[]);
    stringify(): string;
    private getColumnsWithoutPredicate;
}

export declare class SequenceLocation extends SequencePart implements ISequenceLocation {
    readonly location: Location;
    readonly name: string;
    constructor(locationType: Location, name: string);
    stringify(): string;
    protected static stringifyLocation(location: Location): string;
    protected static padLocation(location: Location, stringified: string): string;
}

export declare class ColumnOperation extends SequenceOperation implements ISequenceCoalescent {
    readonly coalescingOperator: CoalescingOperator;
    constructor(operation: Operation, ...columns: ISequenceColumn[]);
    stringify(): string;
}

export declare class SequenceOperation extends SequenceCoalescent implements ISequenceOperation {
    readonly operation: Operation;
    readonly columns: ISequenceColumn[];
    constructor(operation: Operation, ...columns: ISequenceColumn[]);
    stringify(): string;
    protected static stringifyOperation(operationType: Operation): string;
}

export declare namespace Sanitise {
    function part(part: ISequencePart): string;
    function input(value: any): any;
    function inputs(values: any[]): any[];
}