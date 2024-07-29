import Link from "next/link";

export const SideBarMenuItem = ({
  icon,
  title,
  active = false,
  link,
}: {
  icon: any;
  title: string;
  active?: boolean;
  link: string;
}) => {
  return (
    <Link
      href={link}
      className={`${
        active ? "bg-white" : ""
      } p-2 flex justify-start gap-3 rounded-lg mb-3`}
    >
      {icon}
      <span>{title}</span>
    </Link>
  );
};
