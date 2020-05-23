import React, { useState, useEffect } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { List, ListItem } from "../components/List";

function Villagers() {
  // const [villagers, setVillagers] = useState([])

  // useEffect(() => {
  //   loadVillagers()
  // }, [])

  // function loadVillagers() {
  //   API.getVillagers()
  //     .then(res => 
  //       setVillagers(res.data)
  //     )
  //     .catch(err => console.log(err));
  // };
    
  return (
    <div>
      <div>
        <div>
          <h2>Add Your Villagers!</h2>
        </div>
        <div className="searchBox">
          <input className="input" type="text" placeholder="Search For a Villager"/>
        </div>
        <div className="searchBtn">
          <button className="button">Search</button>
          <a href="/#/calendar" className="button">Calendar</a>
          <a href="/#/" className="button">Logout</a>
        </div>
      </div>
      <div id="agrippa">
      {/* <List>
        {villagers.map(villager => (
          <ListItem key={villager.id}>
            <Link to={"/#/editVillager/" + villager.id}>
              <strong>
                {villager.villager_name}, {villager.villager_birthday}
              </strong>
            </Link>
          </ListItem>
        ))}
      </List> */}
        <ul>
          <li>Admiral, Jan-27, Cool</li>
          <li>Agent S, Jul-2, Active, Simple</li>
          <li>Agnes, Apr-21, Simple, Elegant</li>
          <li>Al, Oct-18, Active</li>
          <li>Alfonso, Jun-9, Simple</li>
          <li>Alice, Aug-19, Cute</li>
          <li>Alli, Nov-8, Gorgeous, Elegant</li>
          <li>Amelia, Nov-19, Cool, Elegant</li>
          <li>Anabelle, Feb-16, Cute, Simple</li>
          <li>Anchovy, Mar-4, Simple</li>
          <li>Angus, Apr-30, Cool</li>
          <li>Anicotti, Feb-24, Simple, Elegant</li>
          <li>Ankha, Sep-22, Gorgeous, Simple</li>
          <li>Annalisa, Feb-6, Elegant, Gorgeous</li>
          <li>Annalise, Dec-2, Elegant, Active</li>
          <li>Antonio, Oct-20, Simple</li>
          <li>Apollo, Jul-4, Cool, Simple</li>
          <li>Apple, Sep-24, Cute, Simple</li>
          <li>Astrid, Sep-8, Cool, Active</li>
          <li>Audie, Aug-31, Cute, Active</li>
          <li>Aurora, Jan-27, Cute, Elegant</li>
          <li>Ava, Apr-28, Elegant, Cute</li>
          <li>Avery, Feb-22, Simple, Gorgeous</li>
          <li>Axel, Mar-23, Active, Simple</li>
          <li>Baabara, Mar-28, Gorgeous, Elegant</li>
          <li>Bam, Nov-7, Active, Simple</li>
          <li>Bangle, Aug-27, Gorgeous, Cute</li>
          <li>Barold, Mar-2, Simple, Cool</li>
          <li>Bea, Oct-15, Simple, Cool</li>
          <li>Beardo, Sep-27, Elegant</li>
          <li>Beau, Apr-5, Simple, Cute</li>
          <li>Becky, Dec-9, Gorgeous, Elegant</li>
          <li>Bella, Dec-28, Cool, Active</li>
          <li>Benedict, Oct-10, Simple</li>
          <li>Benjamin, Aug-3, Simple</li>
          <li>Bertha, Apr-25, Cute, Elegant</li>
          <li>Bettina, Jun-12, Simple, Elegant</li>
          <li>Bianca, Dec-13, Cute</li>
          <li>Biff, Mar-29, Gorgeous, Active</li>
          <li>Big Top, Oct-3, Simple, Active</li>
          <li>Bill, Feb-1, Active</li>
          <li>Billy, Mar-25, Simple, Active</li>
          <li>Biskit, May-13, Gorgeous, Simple</li>
          <li>Bitty, Oct-6, Cute, Elegant</li>
          <li>Blaire, Jul-3, Gorgeous, Elegant</li>
          <li>Blanche, Dec-21, Elegant, Gorgeous</li>
          <li>Bluebear, Jun-24, Cute, Simple</li>
          <li>Bob, Jan-1, Simple, Cute</li>
          <li>Bonbon, Mar-3, Cute, Elegant</li>
          <li>Bones, Aug-4, Simple, Cute</li>
          <li>Boomer, Feb-7, Simple, Cool</li>
          <li>Boone, Sep-12, Elegant, Cool</li>
          <li>Boots, Aug-7, Gorgeous, Active</li>
          <li>Boris, Nov-6, Cool, Gorgeous</li>
          <li>Boyd, Oct-1, Simple, Cool</li>
          <li>Bree, Jul-7, Elegant, Gorgeous</li>
          <li>Broccolo, Jun-30, Simple, Cute</li>
          <li>Broffina, Oct-24, Gorgeous, Elegant</li>
          <li>Bruce, May-26, Cool, Simple</li>
          <li>Bubbles, Sep-18, Active, Cute</li>
          <li>Buck, Apr-4, Active, Simple</li>
          <li>Bud, Aug-8, Active, Simple</li>
          <li>Bunnie, May-9, Cute</li>
          <li>Butch, Nov-1, Cool, Simple</li>
          <li>Buzz, Dec-7, Simple, Active</li>
          <li>Cally, Sep-4, Cute, Elegant</li>
          <li>Camofrog, Jun-5, Cool, Active</li>
          <li>Canberra, May-14, Active, Cool</li>
          <li>Candi, Apr-13, Simple, Cute</li>
          <li>Carmen, Jan-6, Elegant, Cute</li>
          <li>Caroline, Jul-15, Cute, Gorgeous</li>
          <li>Carrie, Dec-5, Cute</li>
          <li>Cashmere, Apr-2, Gorgeous, Elegant</li>
          <li>Celia, Mar-25, Elegant, Cute</li>
          <li>Cesar, Sep-6, Cool, Elegant</li>
          <li>Chadder, Dec-15, Elegant, Gorgeous</li>
          <li>Charlise, Apr-17, Active, Cute</li>
          <li>Cheri, Mar-17, Simple, Cute</li>
          <li>Cherry, May-11, Cool, Elegant</li>
          <li>Chester, Aug-6, Simple</li>
          <li>Chevre, Mar-6, Cute, Elegant</li>
          <li>Chief, Dec-19, Cool, Simple</li>
          <li>Chops, Oct-13, Gorgeous, Elegant</li>
          <li>Chow, Jul-22, Cool, Gorgeous</li>
          <li>Chrissy, Aug-28, Cute</li>
          <li>Claude, Dec-3, Simple</li>
          <li>Claudia, Nov-22, Gorgeous, Elegant</li>
          <li>Clay, Oct-19, Elegant, Simple</li>
          <li>Cleo, Feb-9, Cute, Elegant</li>
          <li>Clyde, May-1, Simple, Cute</li>
          <li>Coach, Apr-29, Active</li>
          <li>Cobb, Oct-7, Simple, Active</li>
          <li>Coco, Mar-1, Simple, Cute</li>
          <li>Cole, Aug-10, Simple, Cute</li>
          <li>Colton, May-22, Gorgeous, Elegant</li>
          <li>Cookie, Jun-18, Cute</li>
          <li>Cousteau, Dec-17, Elegant, Gorgeous</li>
          <li>Cranston, Sep-23, Simple, Cool</li>
          <li>Croque, Jul-18, Elegant, Cool</li>
          <li>Cube, Jan-29, Simple, Cute</li>
          <li>Curlos, May-8, Active, Gorgeous</li>
          <li>Curly, Jul-26, Simple, Active</li>
          <li>Curt, Jul-1, Cool</li>
          <li>Cyd, Jun-9, Cool, Active</li>
          <li>Cyrano, Mar-9, Cool, Active</li>
          <li>Daisy, Nov-16, Simple, Cute</li>
          <li>Deena, Jun-27, Simple, Cute</li>
          <li>Deirdre, May-4, Simple</li>
          <li>Del, May-27, Cool, Simple</li>
          <li>Deli, May-24, Gorgeous, Elegant</li>
          <li>Derwin, May-25, Simple, Elegant</li>
          <li>Diana, Jan-4, Elegant, Gorgeous</li>
          <li>Diva, Oct-2, Gorgeous, Elegant</li>
          <li>Dizzy, Jul-14, Simple</li>
          <li>Dobie, Feb-17, Simple, Cool</li>
          <li>Doc, Mar-16, Simple, Elegant</li>
          <li>Dom, Mar-18, Active, Cute</li>
          <li>Dora, Feb-18, Simple, Elegant</li>
          <li>Dotty, Mar-14, Simple, Cute</li>
          <li>Drago, Feb-12, Elegant, Gorgeous</li>
          <li>Drake, Jun-25, Cool, Simple</li>
          <li>Drift, Oct-9, Simple, Active</li>
          <li>Ed, Sep-16, Gorgeous, Elegant</li>
          <li>Egbert, Oct-14, Simple</li>
          <li>Elise, Mar-21, Elegant, Gorgeous</li>
          <li>Ellie, May-12, Simple, Cute</li>
          <li>Elmer, Oct-5, Simple, Cool</li>
          <li>Eloise, Dec-8, Elegant, Simple</li>
          <li>Elvis, Jul-23, Gorgeous, Elegant</li>
          <li>Erik, Jul-27, Simple</li>
          <li>Eugene, Oct-26, Cool, Gorgeous</li>
          <li>Eunice, Apr-3, Simple, Elegant</li>
          <li>Fang, Dec-18, Simple, Cool</li>
          <li>Fauna, Mar-26, Simple, Cute</li>
          <li>Felicity, Mar-30, Cute</li>
          <li>Filbert, Jun-3, Simple, Cute</li>
          <li>Flip, Nov-21, Active, Simple</li>
          <li>Flo, Sep-2, Cool, Gorgeous</li>
          <li>Flora, Feb-9, Cute, Active</li>
          <li>Flurry, Jan-30, Elegant, Cute</li>
          <li>Francine, Jan-22-, Elegant, Gorgeous</li>
          <li>Frank, Jul-30, Gorgeous, Cool</li>
          <li>Freckles, Feb-19, Simple, Cute</li>
          <li>Freya, Dec-14, Elegant, Cool</li>
          <li>Friga, Oct-16, Elegant, Gorgeous</li>
          <li>Frita, Jul-16, Active, Cute</li>
          <li>Frobert, Feb-8, Active, Simple</li>
          <li>Fuchsia, Sep-19, Cool</li>
          <li>Gabi, Dec-16, Cute, Gorgeous</li>
          <li>Gala, Mar-5, Cute, Elegant</li>
          <li>Gaston, Oct-28, Simple, Gorgeous</li>
          <li>Gayle, May-17, Cute</li>
          <li>Genji, Jan-21, Elegant, Simple</li>
          <li>Gigi, Aug-11, Gorgeous, Elegant</li>
          <li>Gladys, Jan-15, Elegant, Cute</li>
          <li>Gloria, Aug-12, Gorgeous, Elegant</li>
          <li>Goldie, Dec-27, Simple, Cute</li>
          <li>Gonzo, Oct-13, Simple, Cool</li>
          <li>Goose, Oct-4, Simple, Active</li>
          <li>Graham, Jun-20, Simple, Cool</li>
          <li>Greta, Sep-5, Elegant, Simple</li>
          <li>Grizzly, Jul-31, Cool, Simple</li>
          <li>Groucho, Oct-23, Cool, Simple</li>
          <li>Gruff, Aug-29, Cool, Gorgeous</li>
          <li>Gwen, Jan-23, Gorgeous, Elegant</li>
          <li>Hamlet, May-30, Simple, Active</li>
          <li>Hamphrey, Feb-25, Cool, Simple</li>
          <li>Hans, Dec-5, Elegant, Gorgeous</li>
          <li>Harry, Jan-7, Cool, Simple</li>
          <li>Hazel, Aug-30, Active, Cute</li>
          <li>Henry, Sep-21, Cool, Simple</li>
          <li>Hippeux, Oct-15, Elegant, Gorgeous</li>
          <li>Hopkins, Mar-11, Simple, Active</li>
          <li>Hopper, Apr-6, Cool, Simple</li>
          <li>Hornsby, Mar-20, Simple</li>
          <li>Huck, Jul-9, Simple, Cool</li>
          <li>Hugh, Dec-30, Simple, Active</li>
          <li>Iggly, Nov-2, Active, Simple</li>
          <li>Ike, May-16, Cool</li>
          <li>Jacob, Aug-24, Simple</li>
          <li>Jacques, Jun-22, Cool, Simple</li>
          <li>Jambette, Oct-27, Cool</li>
          <li>Jay, Jul-17, Active</li>
          <li>Jeremiah, Jul-8, Simple</li>
          <li>Jitters, Feb-2, Active</li>
          <li>Joey, Jan-3, Simple</li>
          <li>Judy, Mar-10, Cute, Elegant</li>
          <li>Julia, Jul-31, Elegant, Gorgeous</li>
          <li>Julian, Mar-15, Gorgeous, Cool</li>
          <li>June, May-21, Cute, Simple</li>
          <li>Kabuki, Nov-29, Simple</li>
          <li>Katt, Apr-27, Cool</li>
          <li>Keaton, Jun-1, Gorgeous, Cool</li>
          <li>Ken, Dec-23, Cool, Simple</li>
          <li>Ketchup, Jul-27, Cute</li>
          <li>Kevin, Apr-26, Active, Simple</li>
          <li>Kid Cat, Aug-1, Active, Simple</li>
          <li>Kidd, Jun-28, Elegant, Cool</li>
          <li>Kiki, Oct-8, Simple</li>
          <li>Kitt, Oct-11, Elegant, Simple</li>
          <li>Kitty, Feb-15, Elegant, Gorgeous</li>
          <li>Klaus, Mar-31, Simple</li>
          <li>Knox, Nov-23, Elegant, Gorgeous</li>
          <li>Kody, Sep-28, Active, Simple</li>
          <li>Kyle, Dec-6, Gorgeous, Cool</li>
          <li>Leonardo, May-15, Active, Gorgeous</li>
          <li>Leopold, Aug-14, Elegant, Gorgeous</li>
          <li>Lily, Feb-4, Cute, Simple</li>
          <li>Limberg, Oct-17, Simple, Cool</li>
          <li>Lionel, Jul-29, Gorgeous, Active</li>
          <li>Lobo, Nov-5, Cool, Active</li>
          <li>Lolly, Mar-27, Simple</li>
          <li>Lopez, Aug-20, Gorgeous</li>
          <li>Louie, Mar-26, Active, Simple</li>
          <li>Lucha, Dec-12, Active, Cool</li>
          <li>Lucky, Nov-4, Simple</li>
          <li>Lucy, Jun-2, Cute, Elegant</li>
          <li>Lyman, Oct-12, Simple, Active</li>
          <li>Mac, Nov-11, Active, Cool</li>
          <li>Maddie, Jan-11, Simple, Cute</li>
          <li>Maelle, Apr-8, Cool, Simple</li>
          <li>Maggie, Sep-3, Cute, Elegant</li>
          <li>Mallary, Nov-17, Cool, Gorgeous</li>
          <li>Maple, Jun-15, Simple, Cute</li>
          <li>Marcel, Dec-31, Simple, Cool</li>
          <li>Marcie, May-31, Cute, Elegant</li>
          <li>Margie, Jan-28, Elegant, Cute</li>
          <li>Marina, Jun-26, Cute</li>
          <li>Marshal, Sep-29, Elegant, Cool</li>
          <li>Mathilda, Nov-12, Cool, Gorgeous</li>
          <li>Megan, Mar-13, Cute, Simple</li>
          <li>Melba, Apr-12, Cute</li>
          <li>Merengue, Mar-19, Cute, Simple</li>
          <li>Merry, Jun-29, Cute</li>
          <li>Midge, Mar-12, Cute, Simple</li>
          <li>Mint, May-2, Gorgeous, Cute</li>
          <li>Mira, Jul-6, Active, Cool</li>
          <li>Miranda, Apr-23, Elegant, Gorgeous</li>
          <li>Mitzi, Sep-25, Simple</li>
          <li>Moe, Jan-12, Active, Simple</li>
          <li>Molly, Mar-7, Cute, Simple</li>
          <li>Monique, Sep-30, Gorgeous, Elegant</li>
          <li>Monty, Dec-7, Cool</li>
          <li>Moose, Sep-13, Cool, Gorgeous</li>
          <li>Mott, Jul-10, Active, Elegant</li>
          <li>Muffy, Feb-14, Gorgeous, Elegant</li>
          <li>Murphy, Dec-29, Simple, Cool</li>
          <li>Nan, Aug-24, Simple, Elegant</li>
          <li>Nana, Aug-23, Cute</li>
          <li>Naomi, Feb-28, Elegant, Gorgeous</li>
          <li>Nate, Aug-16, Simple</li>
          <li>Nibbles, Jul-19, Cute, Active</li>
          <li>Norma, Sep-20, Cute, Simple</li>
          <li>OHare, Jul-24, Active, Cool</li>
          <li>Octavian, Sep-20, Cool, Simple</li>
          <li>Olaf, May-19, Elegant, Gorgeous</li>
          <li>Olive, Jul-12, Simple</li>
          <li>Olivia, Feb-3, Cool, Elegant</li>
          <li>Opal, Jan-20, Elegant, Cool</li>
          <li>Ozzie, May-7, Simple, Cute</li>
          <li>Pancetti, Nov-14, Cute, Gorgeous</li>
          <li>Pango, Nov-9, Elegant, Cool</li>
          <li>Paolo, May-5, Simple, Elegant</li>
          <li>Papi, Jan-10, Simple</li>
          <li>Pashmina, Dec-26, Cool, Elegant</li>
          <li>Pate, Feb-23, Simple, Cute</li>
          <li>Patty, May-10, Simple, Cute</li>
          <li>Paula, Mar-22, Cute, Active</li>
          <li>Peaches, Nov-28, Cute, Simple</li>
          <li>Peanut, Jun-8, Cute</li>
          <li>Pecan, Sep-10, Elegant, Gorgeous</li>
          <li>Peck, Jul-25, Simple, Active</li>
          <li>Peewee, Sep-11, Active, Cool</li>
          <li>Peggy, May-23, Cute, Active</li>
          <li>Pekoe, May-18, Elegant, Cute</li>
          <li>Penelope, Feb-5, Cute, Gorgeous</li>
          <li>Phil, Nov-27, Elegant, Cool</li>
          <li>Phoebe, Apr-22, Gorgeous, Cool</li>
          <li>Pierce, Jan-8, Elegant, Active</li>
          <li>Pietro, Apr-19, Gorgeous, Simple</li>
          <li>Pinky, Sep-9, Cute, Simple</li>
          <li>Piper, Apr-18, Elegant, Gorgeous</li>
          <li>Pippy, Jun-14, Cute, Simple</li>
          <li>Plucky, Oct-12, Cool, Simple</li>
          <li>Pompom, Feb-11, Cute, Simple</li>
          <li>Poncho, Jan-2, Simple</li>
          <li>Poppy, Aug-5, Cute, Elegant</li>
          <li>Portia, Oct-25, Elegant, Gorgeous</li>
          <li>Prince, Jul-21, Simple, Active</li>
          <li>Puck, Feb-21, Active, Simple</li>
          <li>Puddles, Jan-13, Cute, Gorgeous</li>
          <li>Pudge, Jun-11, Simple</li>
          <li>Punchy, Apr-11, Simple</li>
          <li>Purrl, May-29, Cool, Elegant</li>
          <li>Queenie, Nov-13, Gorgeous, Elegant</li>
          <li>Quillson, Dec-22, Elegant, Cool</li>
          <li>Raddle, Jun-6, Elegant, Simple</li>
          <li>Rasher, Apr-7, Cool, Simple</li>
          <li>Raymond, Oct-1, Elegant, Cool</li>
          <li>Renee, May-28, Cool, Active</li>
          <li>Reneigh, Jun-4, Cool, Gorgeous</li>
          <li>Rex, Jul-24, Simple, Cute</li>
          <li>Rhonda, Jan-24, Elegant, Gorgeous</li>
          <li>Ribbot, Feb-13, Simple, Active</li>
          <li>Ricky, Sep-14, Cool, Simple</li>
          <li>Rizzo, Jan-17, Simple, Cool</li>
          <li>Roald, Jan-5, Active, Simple</li>
          <li>Robin, Dec-4, Elegant, Cool</li>
          <li>Rocco, Aug-18, Simple, Cool</li>
          <li>Rocket, Apr-14, Active, Cool</li>
          <li>Rod, Aug-14, Active, Cool</li>
          <li>Rodeo, Oct-29, Simple, Cool</li>
          <li>Rodney, Nov-10, Gorgeous, Cool</li>
          <li>Rolf, Aug-22, Cool, Active</li>
          <li>Rooney, Dec-1, Active</li>
          <li>Rory, Aug-7, Simple, Active</li>
          <li>Roscoe, Jun-16, Cool, Gorgeous</li>
          <li>Rosie, Feb-27, Cute</li>
          <li>Rowan, Aug-26, Active, Simple</li>
          <li>Ruby, Dec-25, Cute, Active</li>
          <li>Rudy, Dec-20, Active, Simple</li>
          <li>Sally, Jun-19, Simple, Elegant</li>
          <li>Samson, Jul-5, Simple, Active</li>
          <li>Sandy, Oct-21, Simple, Cool</li>
          <li>Savannah, Jan-25, Cool, Simple</li>
          <li>Scoot, Jun-13, Active, Simple</li>
          <li>Shari, Apr-10, Cute, Active</li>
          <li>Sheldon, Feb-26, Active, Cool</li>
          <li>Shep, Nov-24, Simple, Cool</li>
          <li>Sherb, Jan-18, Simple, Cute</li>
          <li>Simon, Jan-19, Simple, Active</li>
          <li>Skye, Mar-24, Cute</li>
          <li>Sly, Nov-15, Cool, Simple</li>
          <li>Snake, Nov-3, Active, Simple</li>
          <li>Anteater, Oct-24, Simple</li>
          <li>Soleil, Aug-9, Cool, Gorgeous</li>
          <li>Sparro, Nov-20, Active, Simple</li>
          <li>Spike, Jun-17, Cool, Gorgeous</li>
          <li>Spork, Sep-3, Simple, Active</li>
          <li>Sprinkle, Feb-20, Cute, Elegant</li>
          <li>Sprocket, Dec-1, Simple, Active</li>
          <li>Static, Jul-9, Cool, Active</li>
          <li>Stella, Apr-9, Simple</li>
          <li>Sterling, Dec-11, Simple, Elegant</li>
          <li>Stinky, Aug-17, Active, Simple</li>
          <li>Stitches, Feb-10, Simple, Cute</li>
          <li>Stu, Apr-20, Simple</li>
          <li>Sydney, Jun-21, Cute, Simple</li>
          <li>Sylvana, Oct-22, Cute, Simple</li>
          <li>Sylvia, May-3, Simple, Gorgeous</li>
          <li>T-Bone, May-20, Cool, Simple</li>
          <li>Tabby, Aug-13, Active, Cool</li>
          <li>Tad, Aug-3, Active, Simple</li>
          <li>Tammi, Apr-2, Cute, Active</li>
          <li>Tammy, Jun-23, Cool, Active</li>
          <li>Tangy, Jun-17, Simple, Cute</li>
          <li>Tank, May-6, Active, Simple</li>
          <li>Tasha, Nov-30, Elegant, Gorgeous</li>
          <li>Teddy, Sep-26, Simple</li>
          <li>Tex, Oct-6, Cool, Elegant</li>
          <li>Tia, Nov-18, Cute, Elegant</li>
          <li>Tiffany, Jan-9, Gorgeous, Cool</li>
          <li>Timbra, Oct-21, Elegant, Gorgeous</li>
          <li>Tipper, Aug-25, Gorgeous, Cute</li>
          <li>Tom, Dec-10, Cool, Simple</li>
          <li>Truffles, Jul-28, Cute, Gorgeous</li>
          <li>Tucker, Sep-7, Active, Simple</li>
          <li>Tutu, Sep-15, Cute, Simple</li>
          <li>Twiggy, Jul-13, Simple, Cute</li>
          <li>Tybalt, Aug-19, Active, Simple</li>
          <li>Ursala, Jan-16, Simple, Cute</li>
          <li>Velma, Jan-14, Elegant, Gorgeous</li>
          <li>Vesta, Apr-16, Simple, Cute</li>
          <li>Vic, Dec-29, Cool, Active</li>
          <li>Victoria, Jul-11, Active, Simple</li>
          <li>Violet, Sep-1, Gorgeous, Cool</li>
          <li>Vivian, Jan-26, Gorgeous, Elegant</li>
          <li>Vladimir, Aug-2, Simple, Cool</li>
          <li>Wade, Oct-30, Simple, Gorgeous</li>
          <li>Walker, Jun-10, Simple</li>
          <li>Walt, Apr-24, Cool</li>
          <li>Wart Jr., Aug-21, Simple</li>
          <li>Weber, Jun-30, Cool, Simple</li>
          <li>Wendy, Aug-15, Cool, Gorgeous</li>
          <li>Whitney, Sep-17, Elegant, Cool</li>
          <li>Willow, Nov-26, Cute, Gorgeous</li>
          <li>Winnie, Jan-31, Cool, Simple</li>
          <li>Wolfgang, Nov-25, Cool, Active</li>
          <li>Yuka, Jul-20, Cool, Elegant</li>
          <li>Zell, Jun-7, Cool, Gorgeous</li>
          <li>Zucker, Mar-8, Simple, Cute</li>
        </ul>
      </div>
    </div>
  );
  
}

export default Villagers;