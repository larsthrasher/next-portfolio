import Layout from '../components/Layout';
import { withRouter } from 'next/router';

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80vw" }}>
        They were hiding behind hay bales,
        They were planting
        in the full moon
        They had given all they had
        for something new
        But the light of day was on them,
        They could see the thrashers coming
        And the water
        shone like diamonds in the dew.

        And I was just getting up,
        hit the road before it's light
        Trying to catch an hour on the sun
        When I saw
        those thrashers rolling by,
        Looking more than two lanes wide
        I was feelin'
        like my day had just begun.

        Where the eagle glides ascending
        There's an ancient river bending
        Down the timeless gorge of changes
        Where sleeplessness awaits
        I searched out my companions,
        Who were lost in crystal canyons
        When the aimless blade of science
        Slashed the pearly gates.

        It was then I knew I'd had enough,
        Burned my credit card for fuel
        Headed out to where the pavement
        turns to sand
        With a one-way ticket
        to the land of truth
        And my suitcase in my hand
        How I lost my friends
        I still don't understand.

        They had the best selection,
        They were poisoned with protection
        There was nothing that they needed,
        Nothing left to find
        They were lost in rock formations
        Or became park bench mutations
        On the sidewalks
        and in the stations
        They were waiting, waiting.

        So I got bored and left them there,
        They were just deadweight to me
        Better down the road
        without that load
        Brings back the time
        when I was eight or nine
        I was watchin' my mama's T.V.,
        It was that great
        Grand Canyon rescue episode.

        Where the vulture glides descending
        On an asphalt highway bending
        Thru libraries and museums,
        galaxies and stars
        Down the windy halls of friendship
        To the rose clipped by the bullwhip
        The motel of lost companions
        Waits with heated pool and bar.

        But me I'm not stopping there,
        Got my own row left to hoe
        Just another line
        in the field of time
        When the thrasher comes,
        I'll be stuck in the sun
        Like the dinosaurs in shrines
        But I'll know the time has come
        To give what's mine.
      </p>
  </Layout>
);

export default withRouter(Post);
