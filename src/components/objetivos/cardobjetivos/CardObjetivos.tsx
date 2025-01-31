import Objetivo from "../../../models/Objetivo";

interface CardObjetivosProps {
  objetivo: Objetivo;
}

function CardObjetivos({ objetivo }: CardObjetivosProps) {
  return (
    <>
      <h1 className="font-title text-5xl font-bold text-center text-primary mt-20">
        Objetivos
      </h1>

      <div className="bg-base-200 collapse">
        <input type="checkbox" className="peer" />
        <div className="font-title tcollapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Objetivo {objetivo.id}
        </div>
      </div>
    </>
  );
}
export default CardObjetivos;
