import NameProperty from "./NameProperty";
import BlogLikes from "./BlogLikes";
import BlogImage from "./BlogImage";
import CategoriesRelatedToThisBlog from "./CategoriesRelatedToThisBlog";
import BlogCard from "../BlogCard";

const BlogInfo = ({ slug }) => {
  console.log("qqq", slug);
  const slugInfo = [
    {
      author: {
        id: "ddddd",
        name: "ali nahadiiii",
        image: "/images/articles/userImg.png",
      },
      blog: {
        title: "2023: A Review of the Year in Neuroscience",
      },
      likes: "98k",
      comments: [
        {
          user: {
            id: "ewdfewfre",
            image: "/images/articles/userImg.png",
            name: "alissdwe dcefd",
          },
          matn: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cum explicabo ab a quaerat non molestias repudiandae, eveniet commodi exercitationem.",
          created_at: "2023-11-03 15:23:00",
          reply: [
            {
              matn: "reply to this commient 1",
            },
            {
              matn: "reply 2 to this commient 1",
            },
            {
              matn: "reply 3 to this commient 1",
            },
            {
              matn: "reply 4 to this commient 1",
            },
            {
              matn: "reply 5 to this commient 1",
            },
          ],
        },
      ],
    },
  ];

  const categories = [
    "Psychology",
    "Neuroscience",
    "Science",
    "Psychology",
    "Dopamine",
  ];

  return (
    <div className="text-white flex flex-col gap-5 2xl:px-72 xl:px-52 lg:px-24 md:px-10 sm:px-5 px-4 mb-10">
      {/* title */}
      <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-lg lg:font-extrabold sm:font-medium">
        2023: A Review of the Year in Neuroscience
      </h1>

      <NameProperty
        img="/images/articles/userImg.png"
        min_read="11"
        created_at="3 days ago"
        name="amir seraj"
      />

      <BlogLikes likeNum="115" commentNum="16" />

      <BlogImage img="/images/articles/art-large.webp" />

      {/* matn */}
      <p className="leading-[2rem] text-sm">
        It’s often claimed that the glam journals, Nature, Science, Cell and
        their like, don’t publish replications and don’t publish null results.
        That’s not true. It’s just that, when they do, they have to be
        gargantuan bodies of work. This year, Bassetto et al published, in
        Nature, a staggering paper showing that there was no evidence for a
        magnetic sense in fly brains. They replicated two previous experiments,
        one showing that flies avoid the arm of a T-shaped maze that has a
        magnetic field and another showing that flies knocked to the bottom of a
        tube take longer to climb up if exposed to a magnetic field. Both
        published in high-profile journals, and both taken as evidence that fly
        brains contain some kind of receptor system for magnetic fields.
        Bassetto and co showed convincingly that neither thing happened: flies
        did not care about magnetic fields, neither avoiding the arm of the maze
        nor taking longer to climb up the tube. And when I say convincing, I
        mean really convincing. A total of 97658 flies tested on the maze and
        10960 flies in the tube. Repeated replications of both experiments in
        ever more stringent conditions, from using the exact same fly lines, up
        to building custom magnetically-shielded chambers to rule out any
        effects from the (many) weak magnetic fields in any lab — including the
        Earth’s own. Six years of work, no result. Except, in truth, two major
        results. The first was the total absence of statistics in the paper.
        With so many subjects, any hypothesis test would almost certainly have
        found a “significant” difference between the groups, when that was not
        the interesting question — the question was “is there an effect”?
        Instead, the authors simply showed us the result, and the result was
        obvious. Rutherford’s dictum in action: “If you need to do statistics,
        you’ve done the wrong experiment.” And the second result? That this is a
        model for how to do science. A veritable “house of brick” rather than
        the exploratory, small-N “mansions of straw” we often read in glam mags
        (*cough* Cell *cough*). And in case you don’t know what I’m talking
        about, go read that op-ed now. It’s also often claimed that glam
        journals don’t publish behavioural studies. Yet witness this year a
        rather lovely paper from Wei Ji Ma’s lab, led by Bas van Opheusden. They
        showed us that expertise in a game increases the depth to which people
        can plan their moves. People played a two-player four-in-a-row game,
        taking it in turns to place their counter in any free space on a 9x4
        grid. They played each other, they played computers, they played in huge
        numbers on a mobile app. van Opheusden and co showed players’
        performance was well described by a model that computed a rough idea of
        the value of each state of the board, and searched for the next best
        move from the current state by looking at the values of the possible
        next moves. With that model they found two main things. The better
        players got, the further the model said they searched from the starting
        position. But they also showed that players’ attention was well
        replicated by the model, predicting where they were looking on the board
        while thinking. This, for me, was the new connectionism writ large:
        purely behavioural data, and plenty of it, a systematic exploration of
        necessary model features, and often impressive model fits to each player
        used to infer mechanisms. Striking was the lack of vestigial
        neuroimaging, that urge to tack on a figure showing activation in some
        brain region to somehow validate the work. Just behaviour and
        computational modelling done to a high standard and published in a glam
        journal. Lovely. And to round off the year, there dropped another
        gigantic collection of papers about cell types in the brain of a mouse
        from the Brain Initiative Cell Census Network. Where just two years ago
        we were bathing in ten or so papers on the mouse’s primary motor cortex,
        now we’ve at least ten papers on a cell atlas of the whole mouse brain.
        We learnt that there are lots of different cell types, that different
        types are in different regions of the brain, and that the majority use
        either glutamate or GABA. You may be thinking that we knew this already
        but I couldn’t possibly comment. But we can all agree it’s a huge effort
        and a valuable resource – the value in these cataloguing projects lies
        in the discoveries built upon them, from the new ways of targeting
        specific neurons to trace them and tag them and make them fire (or not).
        Who knows what it could potentially unlock? The mouse brain is now
        “finished” for the types of cells within it. Presumably in just the same
        way as the C Elegans connectome was “complete” in 1986, and the updates
        to it ever since are mere ephemera. Or the human genome sequence was
        “complete” in 2001, and the fact that the first end-to-end sequence of
        all bases was published only last year is mere trifling detail. Next up:
        all the cells in the human brain. And while turning to this challenge,
        one might bear in mind the surprisingly scathing editorial in Nature
        accompanying the BICCN papers, about how daft it is for these huge brain
        projects to be working in silos, without coordination, duplicating
        efforts, and not working out how to share data. Let’s all go home we’re
        wasting our time I opened this essay revelling in the unstoppable force
        of science; I’ve just reviewed for you some of the year’s most
        headline-grabbing advances in neuroscience. But this was also the year a
        major paper claimed science is becoming less disruptive. Its authors
        proposed a fun measure of how disruptive a bit of science has been: take
        the paper announcing it and count how often future papers cite that one
        without citing anything older. A neat idea, capturing our intuitive idea
        that disruptive work changes the course of a scientific field, its older
        work abandoned rapidly in the stampede to catch up. Nice measure, shame
        about the conclusion. They found their measure decreased over time, up
        to the present day, leading them to claim that newer science is less
        disruptive, because we continue to cite older work. But actually it’s
        all relative: their measure corrected for the exponential increase in
        published papers over time, so their claim is that science is
        proportionally less disruptive. Their data showed the absolute number of
        disruptive papers (and patents) was pretty stable over time. Science is
        as disruptive as it ever was: it’s just that the disruptive stuff is
        increasingly outnumbered by the incremental. That’s hardly a surprise.
        There’s been an exponential increase in the number of scientists since
        the 1950s. Their job is to produce research. Papers are how they are
        weighed and measured. So they write a lot of papers, because they have
        to. So all we’ve learnt is that if you incentivise a global talent pool
        of scientists to churn out papers as fast as they can, while also
        teaching, marking, tutoring, sitting on committees, reviewing,
        interviewing, and endless others “ings”, then those papers are not,
        unsurprisingly, deeply thought, long-nurtured disruptive ideas.
      </p>

      <BlogLikes likeNum="115" commentNum="16" />

      <div className="flex flex-wrap gap-2 w-full">
        {categories.map((item, index) => (
          <CategoriesRelatedToThisBlog key={index} categoryName={item} />
        ))}
      </div>

      <BlogCard
        articleImg="/images/articles/art1.png"
        userImg="/images/articles/userImg.png"
        userName="Mark Humphries"
        title="Why does the brain have a reward prediction error?"
        summary="Dopamine, and the art of feedback"
        min_read="10"
        created_at="Feb 11, 2019"
        likeNum="20"
        commentNum="154"
      />
    </div>
  );
};

export default BlogInfo;
