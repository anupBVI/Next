import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import Button from "@/components/Button/Button";
import CustomHead from "@/components/Head/Head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const handleClick = () => {
    alert("happening");
  };
  return (
    <MainLayout>
      <div>
        <br />
        <br />
        <Button primary label="Button" onClick={handleClick} lIcon />{" "}
        <Button secondary rounded label="Button" onClick={handleClick} rIcon />{" "}
        <Button tertiary curved label="no icon" onClick={handleClick} />{" "}
        <Button danger curved label="Test " onClick={handleClick} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloribus
          explicabo hic tempore illo sed adipisci, sequi dolorem sint velit iste
          nulla, blanditiis magnam aliquid eius incidunt sapiente perspiciatis?
          Architecto tempore ex id sapiente ratione modi dolores labore.
          Voluptate aspernatur sunt delectus vel dolorem, adipisci voluptatibus
          ea quod sint odit, asperiores esse quidem vero. Fugit consequatur id
          officia qui non dicta asperiores amet molestiae, debitis dolores
          aliquam, voluptatem nesciunt libero! Eos nostrum officiis autem
          architecto porro et dolores molestias accusantium dolore illo ab
          consectetur animi soluta sequi tempora assumenda, sapiente
          voluptatibus? Sunt nulla provident reiciendis maxime fuga molestiae
          eveniet aliquid earum sit? Molestias tempore dignissimos quasi. Animi
          delectus pariatur fugiat veniam dolor perspiciatis quia iusto libero
          saepe earum iste sint quo nisi vel ad, minima amet quaerat itaque
          possimus, in, molestiae tenetur consequatur! Repellendus sit dolores
          sint ad, consequuntur voluptatem aliquam cum labore asperiores veniam,
          voluptatum numquam doloribus enim odit sed hic veritatis accusantium
          quas rerum architecto quasi ea sequi perspiciatis magni! Libero
          officiis enim iste beatae sit ratione odio tenetur, quo nihil rem
          obcaecati sunt voluptatem voluptatum fugit laborum, ea minima quos
          quidem eligendi magnam laboriosam facere. Delectus sapiente nobis
          laborum esse minus iusto recusandae natus, quia eum sed! Perferendis
          voluptatem, quisquam praesentium laudantium ducimus mollitia molestiae
          suscipit quia saepe non, minus doloribus eum quidem sunt repellendus
          exercitationem ipsam sapiente ab! Nostrum, voluptatibus ducimus aut
          possimus tenetur modi veritatis vel itaque earum beatae omnis iusto
          eveniet error quod tempore nulla incidunt vero amet ratione culpa
          tempora. At numquam recusandae ut aspernatur corporis inventore est,
          animi quod quibusdam eum dolore provident voluptas ex. Quia voluptates
          similique possimus nisi perspiciatis ad omnis quasi quos aliquam
          deleniti consequuntur, natus velit harum laborum corporis ratione
          necessitatibus iure laboriosam veritatis tempore? In quo dicta
          temporibus eligendi voluptates odio, quisquam rerum a possimus officia
          natus, velit debitis ea repudiandae laborum, perferendis iure eveniet
          est! Nulla aperiam nemo quisquam laudantium ex rerum, dolor dicta rem
          ullam impedit libero dolorum corrupti itaque. Velit, iste ipsum
          delectus inventore libero incidunt aliquam, officiis ex laudantium
          optio fugit iusto quasi doloribus fugiat laborum sint suscipit. Quasi,
          suscipit voluptate dignissimos voluptas ratione error nihil molestiae
          magni amet illum reprehenderit voluptatibus. Non eaque maxime ab
          repellat! Accusamus unde reprehenderit iste, sint quis quibusdam
          dolore, obcaecati in eum consequatur ut corporis minus. Quos
          praesentium mollitia tenetur corporis. Voluptate incidunt delectus
          quibusdam, ratione at porro sit necessitatibus ut modi possimus
          cupiditate alias assumenda dignissimos dicta, natus ipsam corrupti
          nisi nulla suscipit id soluta harum nam velit debitis! Facere odio
          tenetur, expedita temporibus veritatis tempore, quibusdam optio beatae
          voluptate earum porro amet quisquam iusto. Dignissimos necessitatibus
          obcaecati sapiente voluptas libero illo enim aliquam tempore explicabo
          aliquid voluptate laborum omnis eum nostrum nihil voluptatem quidem,
          laboriosam, expedita laudantium cum et. Aut odit quos nulla dicta est.
          Quisquam temporibus magnam rem. Architecto veniam quis consequatur,
          quia, perspiciatis corporis doloremque itaque reiciendis libero
          eligendi vero quidem voluptas illo similique commodi. Id, voluptates
          consequuntur dicta magni alias, quidem provident perferendis
          distinctio voluptas autem similique at neque aspernatur ab ipsam
          architecto error quibusdam voluptatum? Deserunt, accusamus libero
          maxime mollitia nobis vel aperiam. Ipsum, cum. Est unde optio, sequi
          blanditiis labore numquam, error libero itaque aut accusamus beatae
          esse veritatis incidunt et dicta consectetur inventore minus soluta.
          Quaerat modi labore, eveniet laudantium eius aliquid velit numquam sed
          dolorum ab, suscipit facere ipsa excepturi vitae nemo doloremque
          fugiat mollitia veniam veritatis at ut? Voluptatibus, optio veniam
          ipsum in beatae quibusdam alias officiis accusantium, quos natus ea
          laboriosam magnam ex, harum assumenda reiciendis at laudantium
          doloremque. Suscipit deserunt praesentium dolore perspiciatis
          accusantium, aperiam asperiores quas debitis itaque illo consequuntur,
          minus, adipisci ea neque id! Laudantium eaque minima, est animi in
          architecto? Aliquam atque asperiores, nesciunt assumenda dolores,
          adipisci corrupti mollitia impedit dolore doloribus quia velit
          tempora, voluptas aspernatur pariatur esse ipsam! Dolorem animi
          repudiandae amet nesciunt ea, placeat recusandae laboriosam fugit eum
          iusto, nostrum nulla, iste distinctio suscipit! Porro veniam eos
          rerum, provident doloremque distinctio vitae quia nisi, sit asperiores
          saepe alias doloribus eveniet nesciunt voluptate. Iure soluta ut
          aliquid omnis optio quibusdam dolorem at, laboriosam maxime sequi ipsa
          dicta sint consequuntur facere quod voluptatibus unde tempora atque
          quis repudiandae. Et repudiandae sapiente ipsam itaque beatae mollitia
          saepe sint voluptates dolorum tempore? Culpa blanditiis quae beatae
          ducimus quisquam quos eaque nam ipsa! Optio ex in adipisci eveniet
          labore alias voluptatem similique enim pariatur accusantium provident
          id libero, cumque, quasi ipsa assumenda necessitatibus modi iusto?
          Placeat a, ipsum hic itaque nesciunt sint dignissimos pariatur
          doloremque nisi dolorum cum iure ut nemo mollitia, culpa sit est
          veritatis! Odio voluptatum adipisci tenetur voluptates similique
          minima quasi consequatur vel dolores consequuntur quisquam a amet
          commodi fugiat maiores architecto illum corporis nihil magni,
          excepturi, eligendi nemo. Soluta quo totam exercitationem tenetur
          eveniet reprehenderit non consequuntur, aperiam quibusdam libero ad!
          Labore vero adipisci modi fugiat, voluptates molestias minima,
          deserunt rem sit nam et fuga eum, accusantium velit quod dolor dolorum
          assumenda dicta? Rem architecto quis voluptatibus omnis similique
          molestiae ad cum hic. Vero enim, dolor ad beatae repellendus iste
          similique voluptatibus iusto qui labore nemo harum nostrum.
          Exercitationem beatae quidem, sint nobis quaerat perspiciatis,
          nesciunt dolorem doloremque aliquid, quod necessitatibus reiciendis
          pariatur! Sint, voluptates aliquid! Natus voluptatum, consequatur
          dolores recusandae harum sunt numquam aliquid necessitatibus officiis
          beatae dolorem in at aut quos, saepe obcaecati perspiciatis. Est ex
          corrupti repudiandae suscipit, mollitia quidem excepturi earum
          assumenda distinctio ad! Iste error ut magnam, nemo harum assumenda
          cumque dolores ipsum ex vero a impedit recusandae voluptates, saepe
          quaerat mollitia officiis vitae excepturi fuga debitis ea tempore! At
          et laborum voluptatum odit officia recusandae natus quo consequuntur
          perspiciatis officiis? Reprehenderit earum repudiandae inventore
          incidunt fugiat officiis magni, repellendus nemo vero repellat
          dignissimos obcaecati esse sapiente asperiores pariatur cum ad animi
          nam suscipit voluptatum, autem labore a? Ut a, architecto ipsam
          laboriosam hic eos, alias unde, blanditiis accusamus voluptates vitae.
          Modi incidunt unde exercitationem quo non, assumenda itaque fugit hic
          sequi architecto quod debitis quisquam minima molestiae. Unde nihil
          optio voluptatem aperiam rerum assumenda, asperiores iusto et
          veritatis porro! Velit molestiae impedit voluptatem pariatur minus,
          sequi corrupti. Quasi ducimus consequatur neque culpa eius nobis
          praesentium, aspernatur delectus architecto? Vel, doloribus eius
          nesciunt quasi aliquam at dolor enim autem possimus magnam atque,
          velit provident iusto maiores quidem, minus nihil. Fuga,
          exercitationem explicabo, quibusdam quas dolorum ea natus nostrum
          corrupti vero delectus esse voluptate, autem sequi voluptatum
          accusamus laboriosam sunt quisquam doloribus enim necessitatibus a
          laudantium. Velit, dolores fugit est iusto praesentium earum qui
          mollitia! In numquam inventore ad accusantium quidem, ullam debitis
          suscipit accusamus soluta dicta aperiam aliquid? Assumenda ullam in
          tenetur non qui nobis quas magni. Ullam pariatur id exercitationem
          autem. Nemo iure facilis error nulla nihil quam harum nesciunt alias,
          similique odio minus cum, eius enim rem unde repellendus amet earum?
          Dolores tenetur in, sequi fugit consequatur deleniti ab iure mollitia
          totam commodi animi tempore, rerum dignissimos rem quas laudantium
          odio pariatur assumenda! Dicta molestias voluptate saepe fugiat magni
          vel amet inventore iure laborum eaque minima, ad labore quos
          praesentium non pariatur, cum sed deleniti dolores porro? Sint,
          aliquam tempore labore eius ratione, quia officiis ducimus reiciendis
          temporibus porro at. Fugiat fugit eligendi expedita dolorum optio
          similique, numquam animi doloribus tenetur quia ipsa autem quod nulla
          unde cupiditate, ea excepturi, vero eos. Corrupti architecto veritatis
          voluptate soluta a eveniet esse labore accusantium eos impedit ullam,
          sint beatae nihil dolor modi, molestiae cupiditate voluptates. Aliquid
          ea dolorem sed, ipsum, minima minus accusamus nihil velit recusandae
          magni quidem.
        </p>
      </div>
    </MainLayout>
  );
}
