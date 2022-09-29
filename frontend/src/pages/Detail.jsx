import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Detail() {
  const params = useParams();
//   const { id, setId } = useState("");

  useEffect(() => {
    // setterId(params);
    console.log(params.id)
  }, [params.id]);

  return <>
    <div>Detail {params.id}</div>
    <button>

    </button>
  </>
}

export default Detail;
