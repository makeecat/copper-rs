use cu29::cutask::CuMsg as _CuMsg;
use cu29_derive::gen_culist_payload;
use cu29_export::run_cli;

type CuListPayload = gen_culist_payload!("copperconfig.ron");

fn main() {
    run_cli::<CuListPayload>().expect("Failed to run the export CLI");
}
