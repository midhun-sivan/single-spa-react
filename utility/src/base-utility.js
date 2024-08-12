// Anything exported from this file is importable by other in-browser modules.
import { BehaviorSubject } from "rxjs";

export const state$ = new BehaviorSubject({ app1: [], app2: [] });
