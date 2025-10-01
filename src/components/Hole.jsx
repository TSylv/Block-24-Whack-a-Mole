import { useGame } from "../context/GameContext.jsx";

export default function Hole({ index }) {
  const { moleIndex, whackMole } = useGame();
  const hasMole = index === moleIndex;

  return (
    <div className="hole" onClick={hasMole ? whackMole : undefined}>
      {hasMole && <div className="mole" aria-label="mole" title="Whack!" />}
    </div>
  );
}