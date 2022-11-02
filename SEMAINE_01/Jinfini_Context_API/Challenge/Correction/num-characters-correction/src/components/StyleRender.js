import { useContext, useEffect } from "react";
import { CharContext } from "../reducers/characters";
import Button from "../Styles/Button";
import Content from "../Styles/Content";

const StyleRender = () => {
  const [state, dispatch] = useContext(CharContext);

  const { styles } = state;

  const handleDelete = (id) => {
    dispatch({ type: "DELETE", id: id });
  };

  // exécuter qu'au montage une seule fois
  useEffect(() => {
    dispatch({ type: "RESET" });
  }, []);

  return (
    <>
      {styles.length > 0 &&
        styles.map((s, i) => (
          <>
            <Content key={i} size={s.size} color={s.color}>
              {s.content}
            </Content>
            <Button little onClick={() => handleDelete(s.id)}>
              Delete
            </Button>
          </>
        ))}
    </>
  );
};

export default StyleRender;
