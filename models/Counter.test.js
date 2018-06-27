import Counter from './Counter';

it('can create a counter', () => {
    const counter = Counter.create({
        count: 0,
    })

    expect(counter.count).toBe(0);
    counter.increment();
    expect(counter.count).toBe(1);
    counter.decrement();
    expect(counter.count).toBe(0);
})
    
