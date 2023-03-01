import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        canvasHeight: 374,
        canvasWidth: 1094,
        windowHeight: 693,
        windowWidth: 1488,
    },
});
