import type { StaticImageData } from "next/image";
import cafe from "@/images/au-cafe-2026.jpg";
import churchAu from "@/images/au-church-2026.jpg";
import library from "@/images/au-library-2026.jpg";
import retail from "@/images/au-retail-2026.jpg";
import storefront from "@/images/au-retail-window-2026.jpg";
import campus from "@/images/eu-campus-2026.jpg";
import churchEu from "@/images/eu-church-2026.jpg";
import dining from "@/images/eu-dining-2026.jpg";
import gym from "@/images/eu-gym-2026.jpg";
import hospital from "@/images/eu-hospital-2026.jpg";
import office from "@/images/eu-office-2026.jpg";

export type IconName = "tv" | "bolt" | "spark" | "login" | "calendar" | "bell" | "clock" | "pin" | "play";

export type Industry = {
  slug: string;
  label: string;
  pageTitle: string;
  eyebrow: string;
  title: string;
  lede: string;
  heroPrimary: string;
  heroSecondary?: string;
  image: StaticImageData;
  alt: string;
  stage: {
    boards: { chip: string; menu: string; rows: { name: string; when: string }[]; playing: string }[];
    side: StaticImageData;
    sideAlt: string;
  };
  statsHead?: { eyebrow: string; title: string; lede: string };
  stats: { value: number; decimals?: number; text: string; source?: string }[];
  features: { tag: string; title: string; text: string; image: StaticImageData; alt: string; button?: string }[];
  templates?: { title: string; text: string };
  reviewsTitle?: string;
  whyTitle: string;
  whyLede: string;
  reasons: { icon: IconName; title: string; text: string }[];
  faqs: [string, string][];
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

function reasons(tvTitle: string): Industry["reasons"] {
  return [
    { icon: "tv", title: tvTitle, text: "No special hardware required. Use what you already have." },
    { icon: "bolt", title: "Get started within minutes", text: "Fast setup process to get your content live instantly." },
    { icon: "spark", title: "Easy to Use and Operate", text: "Intuitive interface designed for non-technical users." },
    { icon: "login", title: "Manage Screens from Single login", text: "Control one or a hundred screens from anywhere." },
    { icon: "calendar", title: "Schedule Content the way you wish", text: "Plan your content strategy ahead of time with ease." },
    { icon: "bell", title: "Gain Screen insights and Get Notifications", text: "Monitor performance and stay informed about your network." },
  ];
}

const screens = "Works with your existing TV’s or Screens***";

export const industries: Industry[] = [
  {
    slug: "retail",
    label: "Retail",
    pageTitle: "Influence purchase decisions at the point of sale.",
    eyebrow: "RETAIL",
    title: "Retail",
    lede: "Want the screens to do the talking for you and attract your customers? That’s where Birrung comes in handy; A smart professional digital signage software that you can control and monitor with ease, with out breaking a sweat",
    heroPrimary: "Get Started",
    heroSecondary: "Request for Demo",
    image: retail,
    alt: "City Beach store at Garden City Booragoon, Perth, photographed in 2026",
    stage: {
      boards: [
        {
          chip: "Offer pushed to the floor",
          menu: "Shop floor",
          playing: "Window offer",
          rows: [
            { name: "New drop", when: "today" },
            { name: "Members", when: "20% off" },
            { name: "Weekend", when: "2 for 1" },
            { name: "Ends", when: "Sunday" },
          ],
        },
        {
          chip: "Window playlist is live",
          menu: "Street window",
          playing: "Sale screen",
          rows: [
            { name: "Street offer", when: "live" },
            { name: "Sale", when: "30% off" },
            { name: "New season", when: "now" },
            { name: "Closes", when: "9pm" },
          ],
        },
        {
          chip: "12 screens in sync",
          menu: "All shops",
          playing: "Floor loop",
          rows: [
            { name: "Screens", when: "12 online" },
            { name: "Playlist", when: "floor" },
            { name: "Next change", when: "2:00" },
            { name: "Synced", when: "just now" },
          ],
        },
      ],
      side: storefront,
      sideAlt: "Country Road shop window with a digital poster, Booragoon, Perth, 2026",
    },
    statsHead: {
      eyebrow: "On the shop floor",
      title: "What shoppers already do.",
      lede: "Figures from published retail surveys. The screens meet people where the decision happens.",
    },
    stats: [
      { value: 65, text: "Consumers said instore digital messages boosts their decisions on their spending" },
      { value: 61.6, decimals: 1, text: "As per eMarketer survey, Consumers agreed they have purchased a product after seeing it in store signage screens" },
      { value: 52, text: "Customers said their advertisementment recall rate is better with Digital screens than traditional print signage." },
      { value: 40, text: "Spar Group Survey states that consumers agreed to have used their phones instantly when shopping instore for promotional content check in’s, digital coupons etc" },
      { value: 32, text: "Retailers said they have seen increase in average transactional value through digital signage" },
      { value: 28, text: "Customer have agreed that signage screens have helped them to understand a product or offering better without speaking to any sales staff" },
    ],
    features: [
      {
        tag: "WINDOW BASED SIGNAGE",
        title: "Your Storefront, Reimagined and can speak something",
        text: "Transform your walls or display windows into effective sales tools . Birrung helps you leverage a dynamic Digital Signage to grab attention, engage your audience and convert visitors into customers. Forget about traditional signage that may blend into the background. Just think about how you can capture the visitors' attention with vivid and appealing imagery. Maintaining your visuals is no less easy than displaying them. Maintaining your visuals is no less than as easy as providing them; just sign in to your account in a couple of clicks and you will have full access to managing one and even a hundred screens in a matter of minutes. This way, a person will not only remain flexible in terms of the offered messages but will also control what they demonstrate to their visitors.",
        image: storefront,
        alt: "Country Road shop window with a digital poster, Booragoon, Perth, 2026",
      },
    ],
    whyTitle: "Why Birrung?",
    whyLede: "Everything you need to succeed.",
    reasons: reasons(screens),
    faqs: [
      ["Can I manage the screens remotely from anywhere?", "Yes, Birrung is cloud-based, allowing you to manage your screens from any device with an internet connection."],
      ["Can we use our existing TV’s or do we need to purchase special screens?", "You can use any existing TV or monitor. Birrung works with most hardware including Smart TVs and media players."],
      ["How long does it take to create an account and start bradcasting?", "You can set up your account and start broadcasting in less than 5 minutes."],
      ["Can we broadcast content from social media platforms?", "At this stage we support Youtube integration. We are working to introduce other social platforms soon"],
      ["Can the content be scheduled as per time windows?", "Absolutely. You can schedule content to run at specific times, days, or even for specific seasons."],
    ],
    ctaTitle: "Get Started with Birrung",
    ctaText: "Amaze your customers today.",
    ctaButton: "Start for free",
  },
  {
    slug: "restaurants",
    label: "Restaurants",
    pageTitle: "Digital Menu Management, Made Easy",
    eyebrow: "HOSPITALITY & RESTAURANTS",
    title: "Digital Menu Management, Made Easy",
    lede: "Static menu boards do not change instantly; it's a long process . Static posters can be ignored. And as for those chalkboard special’s, some of your clients are convinced it's just decoration. What's the deal? Static content may not be seen and unseen content does not sell.\n\nBirrung puts you in control of dynamic digital signage that can actually capture attention.  Change your menu instantly, launch a promotion, withdraw products your choice. You can create a completely new atmosphere,  without printing anything or carrying USB. Gain more attention to your menu from clients thus more sales coming your way.",
    heroPrimary: "Get started",
    heroSecondary: "Contact us",
    image: cafe,
    alt: "Dôme café in Byford, Western Australia, photographed in 2026",
    stage: {
      boards: [
        {
          chip: "Menu updated",
          menu: "House menu",
          playing: "Dinner service",
          rows: [
            { name: "Breakfast", when: "until 11" },
            { name: "Lunch", when: "until 4" },
            { name: "Dinner", when: "from 5" },
            { name: "Late", when: "until 10" },
          ],
        },
        {
          chip: "Specials are on",
          menu: "Today's specials",
          playing: "Chef's board",
          rows: [
            { name: "Soup", when: "of the day" },
            { name: "Catch", when: "today" },
            { name: "Combo", when: "+$4" },
            { name: "Sold out", when: "none" },
          ],
        },
        {
          chip: "Day-part switched",
          menu: "Sessions",
          playing: "Lunch board",
          rows: [
            { name: "Breakfast", when: "done" },
            { name: "Lunch", when: "live" },
            { name: "Dinner", when: "queued" },
            { name: "Bar", when: "from 5" },
          ],
        },
      ],
      side: dining,
      sideAlt: "Evening tables outside a restaurant in Spandau, Berlin, August 2026",
    },
    reviewsTitle: "What does our clients say",
    statsHead: {
      eyebrow: "On the menu",
      title: "What a digital menu changes.",
      lede: "Order value, wait time, and the cost of reprinting a board. The figures sit with each number.",
    },
    stats: [
      { value: 100, text: "Elimination of recurring printing costs for seasonal menus and daily specials." },
      { value: 80, text: "Restaurants experienced an uplift in specific items promoted digitally." },
      { value: 74, text: "Customers say an easy-to-read digital menu is their top priority for a good experience." },
      { value: 50, text: "Of quick service restaurant (QSR) customers say digital menus influence their purchasing decision." },
      { value: 35, text: "Reduction in perceived wait times for customers waiting in line to order." },
      { value: 29, text: "Increase in average order value when using digital menu boards over static ones." },
    ],
    features: [
      {
        tag: "DYNAMIC MENUS",
        title: "Deal of the week or Special of the day..No Problem",
        text: "Nobody ever acted impulsively on purchasing something they could not see. That is why \"Eye Level is Buy Level\" has remained the golden rule of retail and hospitality for all eternity. If it is in their sights, then they will purchase it. If it is out of sight, then they won’t.\n\nWhether you are pitching your deal of the day, encouraging your customers to make the value combo decision, or making a desperate effort to sell off the last twelve portions of yesterday's special before they become today's headache, Birrung has got you sorted. Customize your displays dynamically, load an amazing still image or enticing video onto your display system, and see how sales increase magically without any printers or last-minute USB drives.",
        image: cafe,
        alt: "Dôme café terrace in Byford, Western Australia, 2026",
        button: "Claim 14 day free",
      },
      {
        tag: "DAY-PARTING",
        title: "Need Day-part or Sessions, it’s no more a hassle",
        text: "Using a  USB stick to keep your menu up to date? So old-school. So…2003.  In the time you spent searching for your USB stick (hint: it’s hiding behind the register), your breakfast menu turned into your dinner menu. Oops…\n\nBirrung can schedule your menu and can change automatically as per your schedule. This ensures you show everything when necessary as per your choice. Set it only once, never touch it again, and we beg you to destroy that USB drive.",
        image: dining,
        alt: "Evening tables outside a restaurant in Spandau, Berlin, August 2026",
        button: "Get started",
      },
    ],
    whyTitle: "Why Restaurants Love Birrung",
    whyLede: "Built for speed, appetite, and total control.",
    reasons: [
      { icon: "bolt", title: "Instant Updates", text: "Change prices, add items, or mark items sold out in real-time." },
      { icon: "clock", title: "Day-Parting", text: "Auto-switch menus for breakfast, lunch, and dinner." },
      { icon: "pin", title: "Multi-Location Control", text: "Manage screens across different franchise locations from one login." },
      { icon: "play", title: "Eye-Catching Animations", text: "Bring your food to life with subtle animations and videos." },
      { icon: "spark", title: "Social Media Integration", text: "Display user-generated content and positive reviews." },
      { icon: "tv", title: "Hardware Agnostic", text: "Works with your existing TVs or commercial displays." },
    ],
    faqs: [
      ["We already have screens, Do we require any special screens or Hardware?", "No, Birrung is hardware agnostic, Works on your existing smart screens. If your screens are not smart  we can provide you with a media player which connects your screens HDMI (input) port."],
      ["Does Birrung support Day-part or Session Scheduling?", "Absolutely! With Birrung, daypart scheduling is a breeze. Set your sessions once and content switches automatically . No USBs, No manual swaps &  No stress.Just sit back and let Birrung handle it for you, effortlessly!"],
      ["How quickly can we start using Birrung?", "Its as quick as making instant noodles ! Got your smart screens up and running? Just create your account, upload your content, generate activation codes, and you are live.  Please feel free to contact us if you have any queries. Our team is happy to assist you on this journey."],
    ],
    ctaTitle: "Ready to Modernize Your Menu?",
    ctaText: "Join thousands of successful restaurants enhancing their dining experience.",
    ctaButton: "Start Free Trial",
  },
  {
    slug: "corporate",
    label: "Corporate offices",
    pageTitle: "Reach decision-makers in professional environments.",
    eyebrow: "CORPORATE OFFICES",
    title: "Corporate Offices",
    lede: "From company announcements to KPIs and live updates — display everything that matters, in real time, across all office locations. Keep your teams informed, aligned, and engaged — without sending another email.",
    heroPrimary: "Claim 14-Day Free Trial",
    heroSecondary: "Contact Us",
    image: office,
    alt: "LVM office towers in Münster, Germany, photographed in 2026",
    stage: {
      boards: [
        {
          chip: "Town hall is live",
          menu: "Today's agenda",
          playing: "Visitor welcome",
          rows: [
            { name: "Standup", when: "9:00" },
            { name: "All-hands", when: "11:00" },
            { name: "Town hall", when: "16:00" },
            { name: "Visitors", when: "3" },
          ],
        },
        {
          chip: "Lobby screen updated",
          menu: "Reception",
          playing: "Welcome loop",
          rows: [
            { name: "Welcome", when: "guests" },
            { name: "Room B", when: "booked" },
            { name: "Next session", when: "11:00" },
            { name: "Wi-Fi", when: "live" },
          ],
        },
        {
          chip: "8 screens in sync",
          menu: "Floor screens",
          playing: "KPI board",
          rows: [
            { name: "Screens", when: "8 online" },
            { name: "KPI board", when: "live" },
            { name: "Safety week", when: "on" },
            { name: "Updated", when: "2m ago" },
          ],
        },
      ],
      side: office,
      sideAlt: "Glass office towers linked by a bridge in Münster, 2026",
    },
    reviewsTitle: "What our corporate clients say",
    statsHead: {
      eyebrow: "In the workplace",
      title: "What people retain when it is visual.",
      lede: "Engagement, recall, and internal communication. Each figure names the study it comes from.",
    },
    stats: [
      { value: 85, text: "Employees feel more engaged when communication is visual.", source: "Source: ScreenCloud Workplace Report" },
      { value: 75, text: "Employees retain information better through visual content.", source: "Source: 3M Visual Systems Study" },
      { value: 60, text: "Companies report improved internal communication using digital signage.", source: "Source: Deloitte Digital Workplace Study" },
    ],
    features: [
      {
        tag: "WORKPLACE COMMUNICATION",
        title: "One Screen. Complete Visibility.",
        text: "Birrung helps you broadcast company updates, dashboards, achievements, and announcements across all office screens. From reception to meeting rooms, every display becomes a communication channel.",
        image: office,
        alt: "Glass office towers linked by a bridge in Münster, 2026",
      },
    ],
    templates: {
      title: "Sleek Corporate Templates",
      text: "From safety alerts to CEO updates, find the perfect design.",
    },
    whyTitle: "Why Workplaces Choose Birrung",
    whyLede: "Everything you need to succeed.",
    reasons: reasons(screens),
    faqs: [
      ["Can we display live dashboards and KPIs?", "Yes, Birrung allows you to seamlessly integrate and display real-time dashboards and key performance indicators."],
      ["Can multiple offices be managed from one account?", "Absolutely. You can manage screens across different office locations globally from a single, centralized login."],
      ["Is it secure for internal company data?", "Yes, Birrung prioritizes security and offers enterprise-grade protection to ensure your internal data remains safe."],
      ["Can content be scheduled for different teams?", "Yes, you can target specific screens and schedule content so that different teams see relevant updates at the right time."],
      ["Does it support real-time updates?", "Yes, any changes you make in the dashboard are pushed to your screens in real-time."],
    ],
    ctaTitle: "Connect Your Team Today",
    ctaText: "Modernize your workplace communication.",
    ctaButton: "Get Started",
  },
  {
    slug: "healthcare",
    label: "Healthcare",
    pageTitle: "Engage patients and visitors with care.",
    eyebrow: "HEALTHCARE & HOSPITALS",
    title: "Healthcare & Hospitals",
    lede: "From queue updates to health awareness content, your displays become tools for better patient experience.",
    heroPrimary: "Claim 14-Day Free Trial",
    heroSecondary: "Contact Us",
    image: hospital,
    alt: "Hôpital Rangueil in Toulouse, France, July 2026",
    stage: {
      boards: [
        {
          chip: "Queue updated",
          menu: "Waiting room",
          playing: "Health tips",
          rows: [
            { name: "Now serving", when: "A12" },
            { name: "Radiology", when: "15 min" },
            { name: "Pharmacy", when: "open" },
            { name: "Alerts", when: "clear" },
          ],
        },
        {
          chip: "Wayfinding is on",
          menu: "Directions",
          playing: "Department loop",
          rows: [
            { name: "Imaging", when: "level 2" },
            { name: "Paediatrics", when: "L1" },
            { name: "Cafe", when: "open" },
            { name: "Exit", when: "main" },
          ],
        },
        {
          chip: "Notice pushed",
          menu: "Clinic notices",
          playing: "Visitor hours",
          rows: [
            { name: "Flu clinic", when: "today" },
            { name: "Visiting", when: "2–8" },
            { name: "Quiet", when: "please" },
            { name: "Updated", when: "just now" },
          ],
        },
      ],
      side: hospital,
      sideAlt: "Approach to Hôpital Rangueil, Toulouse, 2026",
    },
    reviewsTitle: "What our healthcare clients say",
    statsHead: {
      eyebrow: "In the waiting room",
      title: "What patients already notice.",
      lede: "Attention, perceived wait, and satisfaction. Each figure names the study it comes from.",
    },
    stats: [
      { value: 75, text: "Patients pay more attention to digital displays than posters.", source: "Source: Nielsen Study" },
      { value: 41, text: "Patients report reduced perceived wait times with digital signage.", source: "Source: Digital Signage Today" },
      { value: 30, text: "Increase in patient satisfaction with better communication systems.", source: "Source: Healthcare IT News" },
    ],
    features: [
      {
        tag: "WAITING AREA EXPERIENCE",
        title: "Better Communication Starts With Better Visibility",
        text: "Use Birrung to display queue updates, directions, health tips, and announcements across waiting areas and departments. Keep patients informed — without adding pressure on staff.",
        image: hospital,
        alt: "Approach to Hôpital Rangueil, Toulouse, 2026",
      },
    ],
    whyTitle: "Why Clinics Choose Birrung",
    whyLede: "Everything you need to succeed.",
    reasons: reasons(screens),
    faqs: [
      ["Can we display queue or token systems?", "Yes, Birrung allows seamless integration with most queue management systems to display real-time updates."],
      ["Is the system secure for healthcare environments?", "Absolutely. Birrung adheres to high security standards, ensuring no sensitive patient data is compromised."],
      ["Can multiple departments be managed separately?", "Yes, you can group screens by department (e.g., Radiology, Pediatrics) and tailor content for each specific area."],
      ["Can we update emergency alerts instantly?", "Yes, you can broadcast emergency alerts or critical announcements to all screens within seconds."],
      ["Will it work across multiple branches?", "Yes, you can manage screens across several clinic locations or hospital branches from a single dashboard."],
    ],
    ctaTitle: "Enhance Your Clinic",
    ctaText: "Better care through digital clarity.",
    ctaButton: "Learn More",
  },
  {
    slug: "education",
    label: "Education",
    pageTitle: "Inspire students and faculty on campus.",
    eyebrow: "EDUCATION INSTITUTIONS",
    title: "Education Institutions",
    lede: "Ensure students and staff always stay informed — without manual effort.",
    heroPrimary: "Claim 14-Day Free Trial",
    heroSecondary: "Contact Us",
    image: library,
    alt: "Atrium of the State Library of Queensland, Brisbane, 2026",
    stage: {
      boards: [
        {
          chip: "Notice sent",
          menu: "Campus today",
          playing: "Exam timetable",
          rows: [
            { name: "Exams", when: "9:00" },
            { name: "Events", when: "1:00" },
            { name: "Notices", when: "live" },
            { name: "Library", when: "open" },
          ],
        },
        {
          chip: "Room change posted",
          menu: "Notices",
          playing: "Lecture board",
          rows: [
            { name: "Room change", when: "B12" },
            { name: "Lecture", when: "10:00" },
            { name: "Shuttle", when: "4:15" },
            { name: "Clubs", when: "6:00" },
          ],
        },
        {
          chip: "Exam hall is live",
          menu: "Exam day",
          playing: "Hall A",
          rows: [
            { name: "Hall A", when: "seated" },
            { name: "Hall B", when: "11:00" },
            { name: "Results", when: "Friday" },
            { name: "Quiet zone", when: "on" },
          ],
        },
      ],
      side: campus,
      sideAlt: "The University of Münster palace campus, photographed in 2026",
    },
    reviewsTitle: "What our education clients say",
    statsHead: {
      eyebrow: "On campus",
      title: "What students already notice.",
      lede: "Engagement, notice boards, and how fast a message gets through. Each figure names the study it comes from.",
    },
    stats: [
      { value: 80, text: "Institutions report improved engagement through digital screens.", source: "Source: EdTech Insights" },
      { value: 68, text: "Students notice digital signage more than notice boards.", source: "Source: Campus Digital Signage Study" },
      { value: 50, text: "Reduction in communication delays using digital displays.", source: "Source: Education Tech Review" },
    ],
    features: [
      {
        tag: "CAMPUS COMMUNICATION",
        title: "One Platform for the Entire Campus",
        text: "Display announcements, exam schedules, event updates, and navigation info across all campus screens. Control everything centrally with Birrung.",
        image: campus,
        alt: "The University of Münster palace campus, photographed in 2026",
      },
    ],
    whyTitle: "Why Campuses Choose Birrung",
    whyLede: "Everything you need to succeed.",
    reasons: reasons(screens),
    faqs: [
      ["Can we broadcast emergency alerts instantly?", "Yes, Birrung allows you to push emergency alerts and critical notifications to all campus screens immediately."],
      ["Can different departments manage their own screens?", "Absolutely. You can assign different permissions so each department can manage their respective displays while retaining central control."],
      ["Does it support campus-wide announcements?", "Yes, you can easily broadcast mass announcements, event details, and general information across the entire institution."],
      ["Can schedules be updated in real time?", "Yes, class schedules, exam timetables, and room changes can be updated instantly and reflected on the screens."],
      ["Is it easy for staff to use?", "Birrung is designed with an intuitive interface, allowing non-technical staff and administrators to manage content effortlessly."],
    ],
    ctaTitle: "Connect Your Campus",
    ctaText: "Empower your student body and staff.",
    ctaButton: "Get Started",
  },
  {
    slug: "gyms",
    label: "Gyms and fitness",
    pageTitle: "Motivate More. Engage Members. Build Energy.",
    eyebrow: "GYMS & FITNESS",
    title: "A gym is not just about equipment — it's about energy and experience. Birrung helps fitness centers display class schedules, trainer profiles, and motivational content across screens.",
    lede: "Keep your members informed, inspired, and engaged every day.",
    heroPrimary: "Claim 14-Day Free Trial",
    heroSecondary: "Contact Us",
    image: gym,
    alt: "Sports hall De Klodde in Zele, Belgium, photographed in 2026",
    stage: {
      boards: [
        {
          chip: "Schedule updated",
          menu: "Class board",
          playing: "Tonight's classes",
          rows: [
            { name: "Spin", when: "6:00" },
            { name: "HIIT", when: "7:15" },
            { name: "Yoga", when: "8:00" },
            { name: "Box", when: "9:00" },
          ],
        },
        {
          chip: "Evening board is on",
          menu: "Tonight",
          playing: "Strength",
          rows: [
            { name: "Strength", when: "5:30" },
            { name: "Cycle", when: "6:15" },
            { name: "Stretch", when: "7:00" },
            { name: "Spots left", when: "4" },
          ],
        },
        {
          chip: "6 screens in sync",
          menu: "Floor screens",
          playing: "Membership",
          rows: [
            { name: "Screens", when: "6 online" },
            { name: "Promo", when: "membership" },
            { name: "Trainer", when: "on floor" },
            { name: "Updated", when: "just now" },
          ],
        },
      ],
      side: gym,
      sideAlt: "Sports hall in Zele, Belgium, 2026",
    },
    reviewsTitle: "What our gyms & fitness clients say",
    statsHead: {
      eyebrow: "On the floor",
      title: "What members already respond to.",
      lede: "Workout attention, class turnout, and how long members stay. Each figure names the study it comes from.",
    },
    stats: [
      { value: 70, text: "Gym members engage more with visual content during workouts.", source: "Source: Fitness Industry Report" },
      { value: 60, text: "Gyms report better member retention using digital engagement tools.", source: "Source: Club Industry Report" },
      { value: 55, text: "Increase in class participation with digital schedule displays.", source: "Source: IHRSA Study" },
    ],
    features: [
      {
        tag: "IN-GYM EXPERIENCE",
        title: "Screens That Motivate and Inform",
        text: "Display class schedules, promotions, trainer highlights, and fitness content across your gym screens. Update instantly and keep your environment dynamic.",
        image: gym,
        alt: "Sports hall in Zele, Belgium, 2026",
      },
    ],
    whyTitle: "Why Gyms Choose Birrung",
    whyLede: "Everything you need to succeed.",
    reasons: reasons("Works with your existing TV's or Screens***"),
    faqs: [
      ["Can we update class schedules in real time?", "Yes, any changes to class timetables are reflected instantly across all your gym screens."],
      ["Can different branches be managed centrally?", "Absolutely. Manage all your gym locations from a single login, with the ability to push content to specific branches."],
      ["Will it work with our existing screens?", "Yes — Birrung works with your existing TVs or commercial displays. No hardware dependency, no extra purchases required."],
      ["Can we display promotional offers?", "Yes, easily create and display membership deals, personal training promotions, and seasonal campaigns on your screens."],
      ["Is it easy for staff to update content?", "Birrung's intuitive dashboard means any staff member can update content in minutes — no technical skills needed."],
    ],
    ctaTitle: "Energize Your Gym",
    ctaText: "Upgrade your member experience today.",
    ctaButton: "Start Today",
  },
  {
    slug: "worship",
    label: "Places of worship",
    pageTitle: "Engage Your Congregation",
    eyebrow: "PLACES OF WORSHIP",
    title: "Inspire and connect with digital displays",
    lede: "Enhance the worship experience by displaying hymn lyrics, service times, community announcements, and upcoming events on vibrant digital screens.",
    heroPrimary: "Get Started Now",
    image: churchAu,
    alt: "All Saints Anglican Church, Henley Brook, Western Australia, 2026",
    stage: {
      boards: [
        {
          chip: "Service times live",
          menu: "This week",
          playing: "Hymn lyrics",
          rows: [
            { name: "Sunday", when: "9:00" },
            { name: "Kids", when: "10:30" },
            { name: "Events", when: "Friday" },
            { name: "Choir", when: "7:00" },
          ],
        },
        {
          chip: "Sunday board is on",
          menu: "Sunday",
          playing: "Gathering",
          rows: [
            { name: "Gathering", when: "9:00" },
            { name: "Service", when: "9:30" },
            { name: "Kids", when: "check-in" },
            { name: "Coffee", when: "after" },
          ],
        },
        {
          chip: "Notice pushed",
          menu: "Notices",
          playing: "Welcome desk",
          rows: [
            { name: "Hymn board", when: "live" },
            { name: "Volunteers", when: "needed" },
            { name: "Outreach", when: "Saturday" },
            { name: "Welcome", when: "desk" },
          ],
        },
      ],
      side: churchEu,
      sideAlt: "Church of St Joan of Arc in Rouen, France, May 2026",
    },
    reviewsTitle: "What our places of worship clients say",
    statsHead: {
      eyebrow: "In the congregation",
      title: "What a clear screen changes.",
      lede: "Announcements people can read, volunteer sign-ups, and turnout for community events.",
    },
    stats: [
      { value: 100, text: "Clarity for announcements and schedules" },
      { value: 85, text: "Increase in volunteer sign-ups" },
      { value: 60, text: "More participation in community events" },
    ],
    features: [
      {
        tag: "ENGAGEMENT",
        title: "Digital Notice Boards",
        text: "Replace paper bulletins with dynamic displays showing service times, volunteer opportunities, and congregation news.",
        image: churchAu,
        alt: "All Saints church at Henley Brook, Western Australia, 2026",
      },
      {
        tag: "WAYFINDING",
        title: "Interactive Kiosks",
        text: "Help newcomers find their way around the campus, check-in for children's ministries, and display community outreach programs seamlessly.",
        image: churchEu,
        alt: "Church of St Joan of Arc in Rouen, France, May 2026",
      },
    ],
    templates: {
      title: "Inspiring Templates Built for Worship",
      text: "Quickly display hymn lyrics, daily scriptures, and event schedules.",
    },
    whyTitle: "Smart Worship Solutions",
    whyLede: "Easy to manage for staff and volunteers.",
    reasons: [
      { icon: "calendar", title: "Easy Scheduling", text: "Pre-schedule content for different services throughout the week." },
      { icon: "login", title: "Remote Access", text: "Manage announcements from anywhere using the cloud portal." },
      { icon: "spark", title: "Volunteer Friendly", text: "Simple and intuitive interface that anyone can use." },
    ],
    faqs: [
      ["Can volunteers easily learn to use the system?", "Yes, Birrung is designed to be incredibly intuitive so volunteers with no technical background can easily manage and update content."],
      ["Can we schedule content for specific holidays?", "Absolutely. You can schedule your content weeks or months in advance for special services and holidays."],
      ["Does it support displaying live video feeds?", "Yes, you can integrate live video feeds seamlessly alongside your announcements and lyrics."],
    ],
    ctaTitle: "Connect Your Community",
    ctaText: "Empower your congregation today.",
    ctaButton: "Get Started",
  },
];

export function industryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}
