import  { useContext } from 'react';
import { AppContext } from '../Providers/AppProvider';

const useAppState = () => useContext(AppContext);

export default useAppState;
