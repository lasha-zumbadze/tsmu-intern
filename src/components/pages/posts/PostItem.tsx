import { IoIosArrowForward } from "react-icons/io";
import Card from "react-bootstrap/Card";
import { getRandomDate } from "../../../utils/helpers";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { PostItemProps } from "../../../types/postTypes";

function PostItem({ title, body }: PostItemProps) {
  const [hovered, setHovered] = useState(false);
  const randomDate = useMemo(() => getRandomDate(), []);
  const { t } = useTranslation();

  return (
    <Card
      className="border border-gray-200 p-5 bg-white rounded-md shadow-lg dark:bg-gray-700 dark:border-gray-600"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Card.Body className="flex flex-col justify-between h-48">
        <Card.Title>
          <h3 className="font-semibold text-2xl text-gray-600 dark:text-gray-50">
            {title.split(" ").slice(0, 3).join(" ")}
          </h3>
          <span className="text-gray-400 dark:text-gray-300 text-sm">
            {randomDate}
          </span>
        </Card.Title>

        <Card.Text className="line-clamp-2 text-gray-700 mb-6">
          {body}
        </Card.Text>
        <div className="flex items-center text-blue-500 dark:text-white dark:hover:text-gray-300">
          <span className="border-b ">{t("view.posts.postItem.btnLabel")}</span>
          <span
            className={`text-lg transition-all ${hovered && "translate-x-1"}`}
          >
            <IoIosArrowForward />
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default PostItem;
