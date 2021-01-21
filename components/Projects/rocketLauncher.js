import redirect from './redirect';

export default (isRocketLaunched) => {
  setTimeout(() => {
    try {
      if (!isRocketLaunched) throw new Error('something went wrong');
    } catch (error) {
      console.log(error.message);
    } finally {
      redirect('/builder');
    }
  }, 1500);
};
