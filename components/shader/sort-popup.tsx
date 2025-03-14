import Image from "next/image";

interface Props {
    className?: string;
  }
  export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
      <div>
            <Image src="./arrow-up-down.svg" alt="" width={35} height={35} />
            <p>Сортировка: </p>
            <p>популярное</p>
      </div>
    );
  };
  