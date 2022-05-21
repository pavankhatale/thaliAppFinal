import React from "react";
import mini4 from "../Imgpro/mini4.jpg";
import { useNavigate } from 'react-router-dom'

export const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${mini4})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vw",
          backgroundAttachment: "fixed"
        }}
      ><br/>

          <div > <h1 style={{ fontFamily: "Sofia", textAlign: "center", color: "aqua" }}>
          About us
        </h1>
        <p style={{ color: "red" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          vero odio pariatur architecto. Nihil explicabo accusamus consequuntur
          neque nulla accusantium aliquam repellendus praesentium ea rem,
          consequatur saepe in voluptas minus, voluptate quasi suscipit dolore
          reiciendis placeat rerum! Quam voluptatum repellat quas rerum
          exercitationem excepturi dolorem, et aliquid consequuntur culpa
          repudiandae, qui quaerat impedit voluptatem cum suscipit esse commodi,
          distinctio quibusdam nihil praesentium? Minus perspiciatis magnam non
          ducimus ratione! Nihil, odit aspernatur neque repellendus in totam
          sunt! Odit cumque fuga adipisci aspernatur delectus dignissimos culpa
          eos laboriosam ratione? Ullam corporis odit aperiam tempora nemo ipsa
          repudiandae! Accusamus ad aliquam cum quidem?
        </p>
        <p style={{ color: "red" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, maiores
          quo aspernatur possimus debitis vero voluptatibus optio placeat modi
          nam similique, sint inventore quas? Neque reprehenderit earum suscipit
          molestias expedita at eum omnis aspernatur quae! Odio iure nobis
          reprehenderit voluptate ut quidem quasi, deleniti illum! Laudantium
          ipsa eaque porro soluta dolor odit, alias cum, ipsum iusto ab fugit
          vero. Doloremque aspernatur voluptate et reiciendis autem a corrupti
          eaque culpa aut debitis temporibus, dicta eveniet odio suscipit id
          eius ab quo voluptas laboriosam. Pariatur architecto accusamus quia!
          Quibusdam eligendi architecto atque dolore totam possimus vel aliquid
          numquam, in alias. Deserunt, velit!
        </p>

        <button   onClick={() => { navigate("/menu") }} className="ordernow" style={{ marginLeft: "45%" }}>
          Order now
        </button></div>
       
      </div>
    </>
  );
};
