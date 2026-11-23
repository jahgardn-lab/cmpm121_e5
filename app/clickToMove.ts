import type { Direction, Position } from "../core/mod.ts";
import type { Controller } from "./controllers.ts";

function findDirection(
  playerPos: Position,
  clickedPos: Position,
): Direction | undefined {
  const x = playerPos.x - clickedPos.x;
  const y = playerPos.y - clickedPos.y;

  if (x == 1 && y == 0) return "left";
  if (x == -1 && y == 0) return "right";
  if (y == 1 && x == 0) return "up";
  if (y == -1 && x == 0) return "down";

  return undefined;
}

export const click: Controller = {
  label: "Click a neighboring tile",
  attach(session, board) {
    const moveClick = board.onTileClick((at) => {
      const { player } = session.getState().puzzle;
      const direction = findDirection(player, at);
      if (direction) {
        session.dispatch({ kind: "move", direction });
      }
    });
    return moveClick;
  },
};
