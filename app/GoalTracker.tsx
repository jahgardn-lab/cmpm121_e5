import type { Position, Puzzle } from "../core/mod.ts";
import { isGoal } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const totalGoals = puzzle.layout.goals.length;
  const filledGoals = puzzle.crates.filter((cratePos: Position) =>
    isGoal(puzzle.layout, cratePos)
  );
  const filledGoalsLen = filledGoals.length;

  return (
    <dl className="goals">
      <dt>Goals Filled</dt>
      <dd>{filledGoalsLen} of {totalGoals}</dd>
    </dl>
  );
}
