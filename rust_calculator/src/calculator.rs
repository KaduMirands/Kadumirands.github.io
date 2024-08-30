pub struct Calculator {}

impl Calculator {
    pub fn new() -> Self {
        Self {}
    }

    pub fn add(&self, one: &f32, two: &f32) -> f32 {
        one + two
    }

    pub fn subtract(&self, one: &f32, two: &f32) -> f32 {
        one - two
    }

    pub fn divide(&self, one: &f32, two: &f32) -> f32 {
        one / two
    }

    pub fn multiply(&self, one: &f32, two: &f32) -> f32 {
        one * two
    }
}