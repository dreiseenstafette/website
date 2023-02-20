import type { NextPage } from 'next'
import Categories from '../components/categories';
import Layout from '../components/layout';

const fallbackImage = "/event/ziel.jpg";

const Home: NextPage = () => {
    return (
        <Layout>

            <div className="content-wide">
                <video
                    autoPlay
                    loop={true}
                    muted
                    className="w-full image object-cover"
                    poster={fallbackImage}
                >
                    <source
                        src="/event/background_video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>


            <div className="content">
                <h1 className="h2">
                    Ein atemberaubender Triathlon, eine traditionsreiche Stafette und ein einzigartiger Lauf in familiärer Atmosphäre - das ist die Dreiseenstafette im Seebachtal.
                </h1>
            </div>

            <Categories />

        </Layout>
    )
}

export default Home;
