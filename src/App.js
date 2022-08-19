import "./App.css";
import Card from "./components/Card";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <Header titulo="Galería de Imágenes con React" />
      <div className="contenedor">
        <Card
          imagen="https://chicascosplay.com/wp-content/uploads/ichigo-shinigami-transformacion.jpg.webp"
          title="Ichigo kurosaki Shinigami"
          descripcion="Él es el protagonista principal de la serie, quien recibe poderes
          de segador de almas después de hacerse amigo de Rukia Kuchiki, la
          segadora de almas asignada a patrullar alrededor de la ciudad
          ficticia de Karakura."
        />
        <Card
          imagen="https://static.zerochan.net/Kurosaki.Ichigo.full.657061.jpg"
          title="Ichigo kurosaki Bankai"
          descripcion="A la llegada de Ichigo en la Sociedad de Almas se entera de su
          forma bankai, llamado Tensa Zangetsu, que cambia de uniforme y de
          espada con el fin de moverla a una velocidad increíblemente alta."
        />
        <Card
          imagen="https://static.zerochan.net/Hollow.Ichigo.full.1496634.jpg"
          title="Ichigo kurosaki Hollow"
          descripcion="Cuando la cadena del destino de Ichigo Kurosaki se erosiono por
          completo, se sometió a la transformación normal de un Plus en un
          Hollow. La diferencia significativa es que normalmente, cuando un
          Plus se transforma en un Hollow, la forma del espíritu se rompe y
          reconstruye así mismo en una nueva forma monstruosa."
        />
        <Card
          imagen="https://c4.wallpaperflare.com/wallpaper/17/753/97/bleach-ulquiorra-cifer-wallpaper-preview.jpg"
          title="Ulquiorra Arrancar Nº4"
          descripcion="Arrancar del ejército de Sōsuke Aizen, un Espada, para ser
          precisos, los Arrancar más poderosos y el único que posee una
          resurrección segunda etapa."
        />
        <Card
          imagen="https://get.wallhere.com/photo/illustration-anime-cartoon-Bleach-Espada-Grimmjow-Jaegerjaquez-mangaka-66260.jpg"
          title="Grimmjow Arrancar Nº6"
          descripcion="Es un Arrancar del ejército de Sōsuke Aizen, un Espada, para ser
          precisos, uno de los Arrancar más poderosos que enfrentará en su viaje."
        />
        <Card
          imagen="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700584556-1024x576.jpg"
          title="Sosuke Aizen"
          descripcion="Principal antagonista de la historia, hasta el final de la saga
          Arrancar.​ En principio Capitán de la Quinta División siendo por
          aquel entonces su teniente Momo Hinamori, develará más adelante
          una conspiración para acabar con toda la Sociedad de Almas."
        />
      </div>
      <Footer subtitulo="Todos los derechos reservados" />
    </>
  );
}

export default App;
