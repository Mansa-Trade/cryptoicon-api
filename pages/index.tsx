import Link from "next/link";

const IndexPage = () => {
  return (
    <div>
      <h1 className="code-line">
        <a id="Crypto_Icon_API_0"></a>Crypto Icon API
      </h1>
      <h3 className="code-line">
        <a id="Examples_4"></a>Examples
      </h3>
      <ul>
        <li className="has-line-data">
          <a href="https://coinicons-api.vercel.app/api/icon/btc">
            https://coinicons-api.vercel.app/api/icon/btc
          </a>
        </li>
        <li className="has-line-data">
          <a href="https://coinicons-api.vercel.app/api/icon/yfi">
            https://coinicons-api.vercel.app/api/icon/yfi
          </a>
        </li>
      </ul>
      <h3 className="code-line">
        <a id="Contribute_8"></a>Contribute
      </h3>
      <p className="has-line-data" data-line-end="11">
        Add 128x128 transparent png images in a PR in our repo:{" "}
        <a href="https://github.com/serranoarevalo/cryptoicon-api">
          https://github.com/serranoarevalo/cryptoicon-api
        </a>
      </p>
    </div>
  );
};

export default IndexPage;
