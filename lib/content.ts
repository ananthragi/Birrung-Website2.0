export const posts = [
  {
    slug: "fifty-screens-in-a-week",
    title: "Fifty screens in a week",
    body: "Aref Aasi’s team deployed 50 retail screens in under a week, from the same dashboard.",
  },
  {
    slug: "use-the-televisions-you-have",
    title: "Use the televisions you have",
    body: "Birrung plays on smart devices you already own. No proprietary player is required.",
  },
  {
    slug: "breakfast-then-lunch-then-dinner",
    title: "Breakfast, then lunch, then dinner",
    body: "Dayparts change the screen on a schedule, without someone standing at the display.",
  },
] as const;

export type Post = (typeof posts)[number];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export const credits = [
  ["Cafe interior by Shixart1985", "https://creativecommons.org/licenses/by/2.0", "CC BY 2.0", "via Wikimedia Commons."],
  ["Sportswear shop by Steffen Mokosch", "https://creativecommons.org/licenses/by-sa/4.0", "CC BY-SA 4.0", ""],
  ["Langan’s Brasserie by BeeCeeMayfair", "https://creativecommons.org/licenses/by-sa/3.0", "CC BY-SA 3.0", ""],
  ["Coworking interior by Influence Media", "https://creativecommons.org/licenses/by/4.0", "CC BY 4.0", ""],
  ["New Children’s Hospital Helsinki by Sinikka Halme", "https://creativecommons.org/licenses/by-sa/4.0", "CC BY-SA 4.0", ""],
  ["Campus building by P e z i", "https://creativecommons.org/licenses/by-sa/3.0", "CC BY-SA 3.0", ""],
  ["Gym interior by GymNation", "https://creativecommons.org/licenses/by-sa/4.0", "CC BY-SA 4.0", ""],
  ["Chapel interior by Dnwinterburn", "https://creativecommons.org/licenses/by/4.0", "CC BY 4.0", ""],
  ["Hotel lobby by fhwrdh", "https://creativecommons.org/licenses/by/2.0", "CC BY 2.0", ""],
  ["Deville Coffee counter by Chris Woodrich", "https://creativecommons.org/licenses/by-sa/4.0", "CC BY-SA 4.0", ""],
  ["Haifa bookstore by Simon Williams", "https://creativecommons.org/licenses/by/2.0", "CC BY 2.0", ""],
  ["St Bartholomew’s Hospital atrium by Acabashi", "https://creativecommons.org/licenses/by-sa/4.0", "CC BY-SA 4.0", ""],
  ["Training gym by Capt. Lena Witham, U.S. Army National Guard, public domain.", "", "", ""],
  ["University of Miskolc library by Szalax", "https://creativecommons.org/publicdomain/zero/1.0/", "CC0", ""],
  ["Meeting room by Iveta Manukyan", "https://creativecommons.org/licenses/by/4.0", "CC BY 4.0", ""],
  ["St Mary’s Cathedral, Edinburgh by Michael D Beckwith", "https://creativecommons.org/publicdomain/zero/1.0/", "CC0", ""],
  ["City Beach, Booragoon, 2026 by Bahnfrend", "https://commons.wikimedia.org/wiki/File:City_Beach_Garden_City_Booragoon,_2026_(01).jpg", "CC BY-SA 4.0", "Perth."],
  ["Country Road, Booragoon, 2026 by Bahnfrend", "https://commons.wikimedia.org/wiki/File:Country_Road_Booragoon,_2026_(01).jpg", "CC BY-SA 4.0", "Perth."],
  ["Dôme Byford, 2026 by Bahnfrend", "https://commons.wikimedia.org/wiki/File:D%C3%B4me_Byford,_2026_(01).jpg", "CC BY-SA 4.0", "Western Australia."],
  ["Altstadt Spandau, August 2026 by NutzerAusBerlin", "https://commons.wikimedia.org/wiki/File:Altstadt_Spandau_20260830_23.jpg", "CC0", "Berlin."],
  ["LVM offices, Münster, 2026 by Dietmar Rabich", "https://commons.wikimedia.org/wiki/File:M%C3%BCnster,_LVM_3_und_5_--_2026_--_0650.jpg", "CC BY-SA 4.0", ""],
  ["Hôpital Rangueil, July 2026 by Olybrius", "https://commons.wikimedia.org/wiki/File:Toulouse_-_H%C3%B4pital_Rangueil_-_20260709_(1).jpg", "CC BY-SA 4.0", "Toulouse."],
  ["State Library of Queensland atrium, 2026 by Chris Olszewski", "https://commons.wikimedia.org/wiki/File:Atrium_of_State_Library_of_Queensland,_2026,_01.jpg", "CC BY-SA 4.0", "Brisbane."],
  ["Schloss Münster, 2026 by Dietmar Rabich", "https://commons.wikimedia.org/wiki/File:M%C3%BCnster,_F%C3%BCrstbisch%C3%B6fliches_Schloss_--_2026_--_0194.jpg", "CC BY-SA 4.0", "University of Münster."],
  ["All Saints, Henley Brook, 2026 by Bahnfrend", "https://commons.wikimedia.org/wiki/File:All_Saints_Anglican_Church,_Henley_Brook,_2026_(01).jpg", "CC BY-SA 4.0", "Western Australia."],
  ["St Joan of Arc, Rouen, May 2026 by Andy Li", "https://commons.wikimedia.org/wiki/File:Church_of_St_Joan_of_Arc,_Rouen_2026-05-11.jpg", "CC0", ""],
  ["Sports hall De Klodde, Zele, 2026 by DimiTalen", "https://commons.wikimedia.org/wiki/File:Sports_hall_De_Klodde,_Zele,_2026.jpg", "CC0", "Belgium."],
] as const;
