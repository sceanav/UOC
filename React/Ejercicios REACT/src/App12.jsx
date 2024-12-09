import A from "./Components/A";
import B from "./Components/B";
import C from "./Components/C";

const App = () => {
	return (
		<div>
			<A amor="te quiero" cuanto="mucho mucho">
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
					provident fugiat nemo! Placeat sapiente dolore doloremque culpa neque
					vero itaque, in dicta eligendi perferendis ipsam, ducimus delectus, ad
					laboriosam magnam!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
					fugit sit cumque asperiores recusandae suscipit. Eius quisquam fuga
					minus perferendis dignissimos quam quae quaerat molestias doloremque
					debitis? Laboriosam, impedit magnam.
				</p>
			</A>
            <A amor="te quiero" cuanto="poquito"></A>
			<B></B>
			<C></C>
		</div>
	);
};

export default App;
