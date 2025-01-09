interface Props {
  race: string;
  color: string;
};

export const CowCard = ({ race, color }: Props) => {
  return (
    <div className="border-2 border-white rounded-sm p-2 min-w-[300px]">
      <p className="font-semibold">Race: {race}</p>
      <p className="font-semibold">Color: {color}</p>
    </div>
  );
};