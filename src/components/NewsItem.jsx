import images from "../assets/news.jpg";
import { Button, Card } from "react-bootstrap";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ height: "12.5rem", width: "17.80rem" }}
          src={src ? src : images}
        />
        <Card.Body style={{ height: "15.5rem", width: "17.80rem" }}>
          <Card.Title>{title.slice(0, 50)}</Card.Title>
          <Card.Text>
            {description
              ? description.slice(0, 90)
              : "This endpoint provides live top and breaking headlines for a country, specific category in a country, single source, or multiple sources"}
          </Card.Text>
          <a href={url}>
            <Button variant="primary">Go somewhere</Button>
          </a>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsItem;
