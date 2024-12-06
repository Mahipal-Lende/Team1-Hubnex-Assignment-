import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Connectivity",
    username: "",
    body: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS49eIASIcQDkSyE-kVrrEoVsKYjk9dlQmfhw&s",
  },
  {
    name: "Developmet Tools and platforms",
    username: "",
    body: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhvDakewFk6cZome_f9aZ7bAELlRRutM3xLQ&s",
  },
  {
    name: "Operating Systems",
    username: "",
    body: "",
    img: "https://img.myloview.com/stickers/os-operating-system-acronym-business-concept-background-vector-illustration-concept-with-keywords-and-icons-lettering-illustration-with-icons-for-web-banner-flyer-landing-pag-700-284303971.jpg",
  },
  {
    name: "Cloud platforms",
    username: "",
    body: "",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGdvlKqh-uQM1EBGM6eT5byQ_Ch-ghkVGwLQ&s",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="35" height="35" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="flex align-middle flex-wrap">
      <h1 className="text-3xl text-white text-center my-4 w-1/2">Technologies we use!!</h1>
      <div className="relative flex bg-background h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border py-3md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
    </div>
  );
}
