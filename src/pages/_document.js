import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="author" content="Cristhian Sevilla" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Cristhian Sevilla" />
        <meta name="twitter:description" content="Soy desrrollador Web Front-End, Disfruto crear cosas que viven en internet." />
        <meta name="twitter:url" content="https://cristhiansevilla.com" />
        <meta name="twitter:image" content="https://cristhiansevilla.com/imagenes/thumbnail.png" />
        {/* Icons */}
        <link rel="shortcut icon" href="favicon.png" />
        <link href="https://cristhiansevilla.com" rel="canonical" />
        <link href="https://cristhiansevilla.com/imagenes/thumbnail.png" type="image/png" rel="image_src" />    
        {/* boostrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        {/* Fuentes */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true} />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
        {/* Normalize */}
        <link rel='stylesheet' href='https://necolas.github.io/normalize.css/8.0.1/normalize.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
      </body>
    </Html>
  )
}
