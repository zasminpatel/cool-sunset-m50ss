import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
export default function User() {
  let params = useParams();
  return (
    <>
      <Button variant="contained">User {params.id}</Button>
    </>
  );
}
